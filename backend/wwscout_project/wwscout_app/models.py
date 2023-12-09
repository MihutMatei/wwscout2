# wwscout_app/models.py

from django.db import models

class JobApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    position = models.CharField(max_length=100)
    resume = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.name

class Meta:
    app_label = 'wwscout_app'
