from django.db import models

class User(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, blank=True)


class Medication(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='medication_pics/', default='../../frontend/assets/default.png')
    dosage_instructions = models.TextField()
    frequency = models.CharField(max_length=20)
    dietary_restrictions = models.TextField(max_length=20, default='')
    tabletcount = models.IntegerField(default=0)
    current_stock = models.IntegerField(default=0)
    refill_date = models.DateField(default='2025-01-01')
    missed_doses = models.IntegerField(default=0)
    # Add other medication-related fields

class DoseLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()

class RefillReminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    remaining_stock = models.IntegerField()
    reminder_date = models.DateField()
    reminder_time = models.TimeField()

class Caregiver(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    email = models.EmailField(unique=True, default='')  # Specify the default value here
    phone_number = models.CharField(max_length=20)
    brings_medication = models.BooleanField(default=False)

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    delivered = models.BooleanField(default=False)
    pillbox_used = models.BooleanField(default=False)
    # Add other notification-related fields

class Dashboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    # Add other dashboard-related fields

