# Generated by Django 3.2.15 on 2022-09-13 15:27

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('drawing', '0002_userdata_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='create_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]