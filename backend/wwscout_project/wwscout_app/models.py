from django.db import models

class JobApplication(models.Model):
    name = models.CharField(max_length=255, default="")
    open_position = models.CharField(max_length=255, default="")
    num_open_positions = models.PositiveIntegerField(default=0)
    hours_per_week = models.PositiveIntegerField(default=40)
    days_off_per_year = models.PositiveIntegerField(default=21)
    salary_per_month = models.DecimalField(max_digits=10, decimal_places=2, default=3000)
    facilities = models.TextField(default="")
    subscription_type = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.name
