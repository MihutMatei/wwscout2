# wwscout_app/urls.py

from django.urls import path
from .views import GetJobApplicationsView
from .views import GetPeersView

urlpatterns = [
    path('api/get_job_applications/', GetJobApplicationsView.as_view(), name='get_job_applications'),
    path('api/get_peers/', GetPeersView.as_view(), name='get_peers')
]
