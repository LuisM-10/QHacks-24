from django.shortcuts import render
from django.core.files.base import ContentFile
from rest_framework import generics, status
from .models import Image
from .serializers import ImageSerializer, CreateImageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import openai, requests, os

openai.api_key = 'INSERT API KEY HERE'


# Create your views here.

class ImageView(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


#Get details of last generated image 
class GetImage(APIView):
    serializer_class = ImageSerializer

    def get(self, request, format=None):
        last_image = Image.objects.last()
        data = ImageSerializer(last_image).data
        return Response(data, status=status.HTTP_200_OK)


class CreateImageView(APIView):
    serializer_class = CreateImageSerializer

    def post(self, request, format=None):

        #Create a new session if one does not already exist
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            text_prompt = serializer.data.get('text_prompt')
            size = serializer.data.get('size')
            host = self.request.session.session_key
            query_set = Image.objects.filter(host=host)

            #Update provided data
            if query_set.exists():
                session = query_set[0]
                session.text_prompt = text_prompt
                session.size = size

                #Generate an image and store its url
                if session.size == "1024x1024":
                    response = openai.images.generate(prompt="A highly detailed blueprint of" + session.text_prompt,
                                                    model="dall-e-3",
                                                    n=1,
                                                    quality="hd",
                                                    size=session.size)
                else:
                    response = openai.images.generate(prompt="A highly detailed blueprint of" + session.text_prompt,
                                                    model="dall-e-2",
                                                    n=1,
                                                    size=session.size)
                image_data = response.data
                image_urls = []
                for image in image_data:
                    image_urls.append(image.url)
                image_url = image_urls[-1]
    
                session.generated_image_url = image_url

                session.save(update_fields=['text_prompt', 'size', 'generated_image_url'])
                return Response(ImageSerializer(session).data, status=status.HTTP_200_OK)
            else:
                session = Image(host=host, text_prompt=text_prompt, size=size)
                session.save()
                return Response(ImageSerializer(session).data, status=status.HTTP_201_CREATED)

        
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)