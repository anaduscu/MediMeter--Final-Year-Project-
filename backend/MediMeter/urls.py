from django.urls import path
from .views import register_user, get_csrf_token , login_user, set_gender, box_used, caregiver, get_medication, set_medication, delete_medication, get_personal_info, increase_stock, decrease_stock, get_stock, set_refill_date
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
    path('medication/increase_stock/<int:medication_id>/', increase_stock, name='increase_stock'),
    path('medication/decrease_stock/<int:medication_id>/', decrease_stock, name='decrease_stock'),
    path('medication/get_stock/<int:medication_id>/', get_stock, name='get_stock'),
    path('medication/set_refill_date/<int:medication_id>/', set_refill_date, name='set_refill_date'),
    path('user/get_personal_info/', get_personal_info, name='get_personal_info'),
    path('user/login/', login_user, name='login_user'),
    path('csrf_token/', get_csrf_token, name='get_csrf_token'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
