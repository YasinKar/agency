from django.contrib import admin
from . import models

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active']
    list_editable = ['is_active']
    search_fields = ['title', 'is_active']

admin.site.register(models.Service, ServiceAdmin)
admin.site.register(models.ServiceComment)
admin.site.register(models.ServiceImage)