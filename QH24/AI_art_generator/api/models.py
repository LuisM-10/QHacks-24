from django.db import models


# Create your models here.
class Image(models.Model):
    host = models.CharField(max_length=50)
    text_prompt = models.TextField(max_length=1000)
    size = models.CharField(max_length=9, default="256x256")
    generated_image_url = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.text_prompt)

