from django.contrib import admin

from .models import Medication, DoseLog, RefillReminder, Caregiver, Notification, Dashboard, User

admin.site.register(User)
admin.site.register(Medication)
admin.site.register(DoseLog)
admin.site.register(RefillReminder)
admin.site.register(Caregiver)
admin.site.register(Notification)
admin.site.register(Dashboard)
