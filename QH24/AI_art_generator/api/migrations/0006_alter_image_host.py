# Generated by Django 5.0.1 on 2024-01-30 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_session_host_image_host'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='host',
            field=models.CharField(default='lol', max_length=50),
        ),
    ]