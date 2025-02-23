from rest_framework import serializers
from .models import SiteSetting, ContactUs, FAQ

class SiteSettingSerializer(serializers.ModelSerializer):
    id = serializers.CharField()
    
    class Meta:
        model = SiteSetting
        fields = [
            'id', 'domain', 'site_name',
            'site_logo', 'site_description',
            'rules', 'twitter', 'telegram',
            'linkedin', 'instagram', 'email',
            'copyright', 'site_main_title', 'about_us',
            'phone', 'github'
        ]

class FAQSerializer(serializers.ModelSerializer):
    id = serializers.CharField()
    
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'is_active']

class ContactUsSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    
    class Meta:
        model = ContactUs
        fields = ['id', 'full_name', 'email', 'title', 'message']

