from rest_framework import serializers
from .models import Service, ServiceImage, ServiceFeature

class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceImage
        fields = '__all__'
        
class ServiceFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceFeature
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    service_images = ServiceImageSerializer(many=True, read_only=True)
    service_features = ServiceFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = '__all__'