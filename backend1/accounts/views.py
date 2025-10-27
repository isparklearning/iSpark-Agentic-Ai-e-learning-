# accounts/views.py
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import UserSerializer

# ✅ Mapping to normalize role input
ROLE_MAPPING = {
    "student": "Student",
    "trainer": "Trainer",
    "admin": "Admin",
    "super admin": "Super Admin",
    "superadmin": "Super Admin"
}

# ----------------------- SIGNUP -----------------------
@api_view(['POST'])
def signup(request):
    """Handle user signup and role normalization"""
    data = request.data

    # ✅ Check required fields
    required_fields = ["username", "email", "password"]
    for field in required_fields:
        if field not in data or not data[field]:
            return Response(
                {"error": f"'{field}' is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

    # ✅ Normalize role
    input_role = data.get("role", "Student")
    normalized_role = ROLE_MAPPING.get(input_role.lower(), "Student")
    data["role"] = normalized_role

    # ✅ Check if username or email already exists
    if CustomUser.objects.filter(username=data["username"]).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
    if CustomUser.objects.filter(email=data["email"]).exists():
        return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

    # ✅ Serialize and save user
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        # Admins are approved immediately
        if normalized_role.lower() == 'admin':
            return Response(
                {"message": "Admin registered successfully"},
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {"message": "Account created. Waiting for admin approval."},
                status=status.HTTP_201_CREATED
            )
    else:
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


# ----------------------- LOGIN -----------------------
@api_view(['POST'])
def login_view(request):
    """Handle user login with approval and role check"""
    data = request.data

    username = data.get("username")
    password = data.get("password")
    selected_role = data.get("role")

    if not username or not password:
        return Response(
            {"success": False, "message": "Username and password are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = authenticate(username=username, password=password)

    if user is None:
        return Response(
            {"success": False, "message": "Invalid username or password."},
            status=status.HTTP_401_UNAUTHORIZED
        )

    user_role = getattr(user, "role", None)

    # Block login if user is not approved (except admin)
    if user_role.lower() != "admin" and not user.is_approved:
        return Response(
            {"success": False, "message": "Your account is not yet approved by admin."},
            status=status.HTTP_403_FORBIDDEN
        )

    # Role mismatch
    if selected_role and selected_role.lower() != user_role.lower():
        return Response(
            {"success": False, "message": f"Selected role '{selected_role}' does not match your account role '{user_role}'."},
            status=status.HTTP_403_FORBIDDEN
        )

    # ✅ Successful login
    return Response({
        "success": True,
        "username": user.username,
        "user_fullname": f"{user.first_name} {user.last_name}".strip(),
        "role": user_role,
        "message": "Login successful."
    }, status=status.HTTP_200_OK)


# ----------------------- PENDING USERS -----------------------
@api_view(['GET'])
def pending_users(request):
    """Get all users waiting for admin approval"""
    users = CustomUser.objects.filter(is_approved=False)
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ----------------------- APPROVE USER -----------------------
@api_view(['POST'])
def approve_user(request, user_id):
    """Approve a specific user (by admin)"""
    try:
        user = CustomUser.objects.get(id=user_id)
        user.is_approved = True
        user.save()
        return Response({"message": f"{user.username} approved successfully"}, status=status.HTTP_200_OK)
    except CustomUser.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def user_stats(request):
    """Return total users and breakdown by role"""
    total_users = CustomUser.objects.count()
    total_students = CustomUser.objects.filter(role="Student").count()
    total_trainers = CustomUser.objects.filter(role="Trainer").count()
    total_admins = CustomUser.objects.filter(role="Admin").count()

    return Response({
        "totalUsers": total_users,
        "students": total_students,
        "trainers": total_trainers,
        "admins": total_admins
    }, status=status.HTTP_200_OK)