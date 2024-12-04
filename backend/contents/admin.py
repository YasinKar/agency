from django.contrib import admin
from . import models

class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ['domain', 'site_name', 'maintenance_mode', 'is_main_setting']
    list_editable = [ 'site_name', 'maintenance_mode', 'is_main_setting']
    search_fields = ['domain', 'site_name', 'maintenance_mode', 'is_main_setting']

admin.site.register(models.SiteSetting, SiteSettingAdmin)
admin.site.register(models.ElectronicSymbol)
admin.site.register(models.ContactUs)