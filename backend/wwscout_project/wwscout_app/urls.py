# wwscout_app/urls.py

from django.urls import path
from .views import GetJobApplicationsView

urlpatterns = [
    path('api/get_job_applications/', GetJobApplicationsView.as_view(), name='get_job_applications'),
]
