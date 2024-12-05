from django.contrib import admin
from django.contrib.auth.models import Group
from . import models

class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'username', 'email', 'is_active']
    list_editable = ['is_active']
    search_fields = ['first_name', 'last_name', 'username', 'email', 'is_active']

admin.site.register(models.User, UserAdmin)
admin.site.unregister(Group)