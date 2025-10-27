from django.urls import path
from .views import signup, login_view, pending_users, approve_user, user_stats

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),
    path('pending-users/', pending_users, name='pending-users'),
    path('approve/<int:user_id>/', approve_user, name='approve-user'),
    path('stats/', user_stats, name='user_stats'),  
]
