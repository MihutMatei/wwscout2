# wwscout_app/urls.py

from django.urls import path
from .views import HomeView, GetJobApplicationsView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),  # Add this line for the root path
    path('api/get_job_applications/', GetJobApplicationsView.as_view(), name='get_job_applications'),
]
