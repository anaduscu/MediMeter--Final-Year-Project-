# Generated by Django 5.0.3 on 2024-04-08 00:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MediMeter', '0006_caregiver_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='medication',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='MediMeter.user'),
        ),
    ]