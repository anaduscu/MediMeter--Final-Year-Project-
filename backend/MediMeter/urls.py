from django.urls import path
from .views import register_user, get_csrf_token , login_user

urlpatterns = [
    path('user/register/', register_user, name='register_user'),
    path('user/login/', login_user, name='login_user'),
    path('csrf_token/', get_csrf_token, name='get_csrf_token'),
]
