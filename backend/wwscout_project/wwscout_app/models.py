from django.db import models

class JobApplication(models.Model):
    name = models.CharField(max_length=255)
    open_position = models.CharField(max_length=255)
    num_open_positions = models.PositiveIntegerField()
    hours_per_week = models.PositiveIntegerField()
    days_off_per_year = models.PositiveIntegerField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    facilities = models.TextField()
    subscription_type = models.CharField(max_length=255)

    def __str__(self):
        return self.name
