from django.urls import path
from .views import register_user, get_csrf_token

urlpatterns = [
    path('user/', register_user, name='register_user'),
    path('csrf_token/', get_csrf_token, name='get_csrf_token'),
]
