from rest_framework import serializers
from .models import SiteSetting, ElectronicSymbol, ContactUs
import re

class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = '__all__'

class ElectronicSymbolSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectronicSymbol
        fields = '__all__'

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'
        
    def clean_phone(self):
        phone = self.initial_data.get('phone')
        phone_regex = r"^(0|98)?([ ]|-|[()]){0,2}9[0-4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$"
        if not re.match(phone_regex, phone):
            raise serializers.ValidationError({'phone': 'The phone number entered is not valid.'})

