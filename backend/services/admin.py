from django.contrib import admin
from django.utils.html import format_html
from .models import (
    ServiceFeature,
    ServiceImage,
    Service,
    Project
)

class ServiceFeatureBlockInline(admin.TabularInline):
    model = ServiceFeature
    extra = 3
    
class ServiceImageBlockInline(admin.TabularInline):
    model = ServiceImage
    extra = 3
    
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_active')
    list_display_links = ('title', )
    list_filter = ('title', 'created_at', 'is_active')
    search_fields = ('title', 'created_at', 'is_active')
    list_editable = ('is_active', )
    exclude = ('slug', )
    
    inlines = [ServiceFeatureBlockInline, ServiceImageBlockInline]
    
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('thumbnail_tag', 'title', 'created_at', 'is_active')
    list_display_links = ('thumbnail_tag', 'title')
    list_filter = ('title', 'created_at', 'is_active')
    search_fields = ('title', 'created_at', 'is_active')
    list_editable = ('is_active', )
    exclude = ('slug', )
    
    def thumbnail_tag(self, obj):
        return format_html('<img src="{}" width="300" height="150" />'.format(obj.thumbnail.url))
    
    thumbnail_tag.short_description = 'Image'
    
admin.site.register(ServiceImage)
admin.site.register(ServiceFeature)