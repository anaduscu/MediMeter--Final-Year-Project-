# Generated by Django 5.0.2 on 2024-04-21 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MediMeter', '0014_medication_refill_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medication',
            name='picture',
            field=models.ImageField(default='medication_pics/default.jpg', upload_to='medication_pics/'),
        ),
    ]
