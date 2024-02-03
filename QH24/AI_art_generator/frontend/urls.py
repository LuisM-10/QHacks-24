from django.urls import path
from .views import index

#Render pages according to the provided path
urlpatterns = [
    path('', index),
    path('tool', index),
    path('about', index),
    path('image', index)
]