from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Main(models.Model):
    name=models.TextField()
    def __str__(self):
        return self.name
    
class Contact(models.Model):
    name_id  = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70, default="")
    subject = models.CharField(max_length=70, default="")
    message = models.CharField(max_length=500, default="")

    def __str__(self):
        return self.name
    