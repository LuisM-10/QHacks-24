# Generated by Django 5.0.1 on 2024-01-30 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_image_host'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='host',
            field=models.CharField(max_length=50),
        ),
    ]
