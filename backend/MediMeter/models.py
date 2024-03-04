from django.db import models

class User(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)


class Medication(models.Model):
    name = models.CharField(max_length=255)
    # picture = models.ImageField(upload_to='medication_pics/')
    dosage_instructions = models.TextField()
    frequency = models.CharField(max_length=20)
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
    name = models.CharField(max_length=255)
    contact_details = models.CharField(max_length=20)
    # Add other caregiver-related fields

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    delivered = models.BooleanField(default=False)
    # Add other notification-related fields

class Dashboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    # Add other dashboard-related fields

