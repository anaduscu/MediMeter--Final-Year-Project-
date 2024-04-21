from django.urls import path
from .views import register_user, get_csrf_token , login_user, set_gender, box_used, caregiver, get_medication, set_medication, delete_medication, get_personal_info
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('user/register/', register_user, name='register_user'),
    path('user/set_gender/', set_gender, name='set_gender'),
    path('user/box_used/', box_used, name='box_used'),
    path('user/caregiver/', caregiver, name='caregiver'),
    path('medication/get_medication/', get_medication, name='get_medication'),
    path('medication/set_medication/', set_medication, name='set_medication'),
    path('medication/delete/<int:medication_id>/', delete_medication, name='delete_medication'),
    path('user/get_personal_info/', get_personal_info, name='get_personal_info'),
    path('user/login/', login_user, name='login_user'),
    path('csrf_token/', get_csrf_token, name='get_csrf_token'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
