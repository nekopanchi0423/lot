from venv import create
from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

class UserData(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, default=1,
    )
    name = models.CharField(
        max_length=200
    )
    email = models.CharField(
        max_length=200
    )
    create_at = models.DateTimeField(
        default=timezone.now
    )

    def __str__(self):
        return self.name