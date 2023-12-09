from django.urls import path
from .views import GetJobApplicationsView

urlpatterns = [
    # ... existing URL patterns ...
    path('api/get_job_applications/', GetJobApplicationsView.as_view(), name='get_job_applications'),
]
