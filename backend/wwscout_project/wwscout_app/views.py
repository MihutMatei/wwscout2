from django.http import JsonResponse
from django.views import View
from .models import JobApplication
from .models import Peer

class GetJobApplicationsView(View):
    def get(self, request, *args, **kwargs):
        job_applications = list(JobApplication.objects.values())
        return JsonResponse({'job_applications': job_applications})
    
class GetPeersView(View):
    def get(self, request, *args, **kwargs):
        peers = list(Peer.objects.values())  # Retrieve peers from your Peer model
        return JsonResponse({'peers': peers})