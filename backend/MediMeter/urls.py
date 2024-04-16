from django.urls import path
from .views import register_user, get_csrf_token , login_user, set_gender, box_used

urlpatterns = [
    path('user/register/', register_user, name='register_user'),
    path('user/set_gender/', set_gender, name='set_gender'),
    path('user/box_used/', box_used, name='box_used'),
    path('user/login/', login_user, name='login_user'),
    path('csrf_token/', get_csrf_token, name='get_csrf_token'),
]
