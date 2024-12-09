from rest_framework import serializers
from .models import Service, ServiceImage, ServiceComment

class ServiceCommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')
    
    class Meta:
        model = ServiceComment
        fields = ['id', 'title', 'message', 'replay', 'service', 'user', 'recommend', 'date', 'likes', 'dislikes']
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['date'] = instance.date.isoformat()
        return representation

class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceImage
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    service_images = ServiceImageSerializer(many=True, read_only=True)
    comments = ServiceCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = '__all__'