from django.contrib import admin
from .models import (
    ContactUs,
    FAQ,
    SiteSetting
)

@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ('domain', 'site_name', 'maintenance_mode', 'is_main_setting')
    list_filter = ('domain', 'site_name', 'maintenance_mode', 'is_main_setting')
    search_fields = ('domain', 'site_name', 'maintenance_mode', 'is_main_setting')
    
admin.site.register(ContactUs)
admin.site.register(FAQ)