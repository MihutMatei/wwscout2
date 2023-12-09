from django.urls import path
from .views import GetJobApplicationsView, HomeView

urlpatterns = [
    # ... existing URL patterns ...
    path('api/get_job_applications/', GetJobApplicationsView.as_view(), name='get_job_applications'),
    path('', HomeView.as_view(), name='home'),
]
