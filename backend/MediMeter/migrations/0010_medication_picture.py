# Generated by Django 5.0.2 on 2024-04-20 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MediMeter', '0009_medication_dietary_restrictions'),
    ]

    operations = [
        migrations.AddField(
            model_name='medication',
            name='picture',
            field=models.ImageField(default='../../frontend/assets/default.png', upload_to='medication_pics/'),
        ),
    ]
