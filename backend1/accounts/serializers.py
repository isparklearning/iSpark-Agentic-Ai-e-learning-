# accounts/serializers.py
from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 'first_name', 'last_name', 'username', 'email',
            'mobile_number', 'date_of_birth', 'gender', 'college',
            'department', 'aadhar_number', 'experience', 'role', 'password',
            'is_approved', 
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'is_approved': {'read_only': True},  
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        if validated_data.get('role', '').lower() == 'admin':
            validated_data['is_approved'] = True
        else:
            validated_data['is_approved'] = False
        return super().create(validated_data)
