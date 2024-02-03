from django.urls import path
from .views import ImageView, CreateImageView, GetImage

urlpatterns = [
    path('tool', CreateImageView.as_view()),
    path('get-image', GetImage.as_view())
]