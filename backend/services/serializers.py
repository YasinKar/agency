from rest_framework import serializers
from .models import Service, ServiceImage, ServiceFeature, Project

class ServiceImageSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    service = serializers.CharField(read_only=True)
    
    class Meta:
        model = ServiceImage
        fields = ['id', 'service', 'image']
        
class ServiceFeatureSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    service = serializers.CharField(read_only=True)
    
    class Meta:
        model = ServiceFeature
        fields = ['id', 'service', 'key', 'value']

class ServiceSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    service_images = ServiceImageSerializer(many=True, read_only=True)
    service_features = ServiceFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = ['id', 'service_images', 'service_features', 'title', 'description', 'icon', 'thumbnail', 'slug', 'is_active', 'created_at']
        
class ProjectSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    service = serializers.CharField(source="service.title", read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'service', 'title', 'description', 'thumbnail', 'demo', 'slug', 'is_active', 'created_at']