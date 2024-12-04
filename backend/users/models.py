from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    auth_code = models.CharField(blank=True, null=True, max_length=300, unique=True, verbose_name='Auth code')
    email = models.EmailField(unique=True, verbose_name='Email')
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'