from rest_framework import serializers
from .models import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'host', 'text_prompt', 'size', 'generated_image_url', 'created_at')

class CreateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('text_prompt', 'size')