# Generated by Django 5.0.2 on 2024-04-21 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MediMeter', '0013_medication_missed_doses'),
    ]

    operations = [
        migrations.AddField(
            model_name='medication',
            name='refill_date',
            field=models.DateField(default='2025-01-01'),
        ),
    ]
