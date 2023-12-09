from django.http import JsonResponse
from django.views import View
from .models import JobApplication

class GetJobApplicationsView(View):
    def get(self, request, *args, **kwargs):
        job_applications = list(JobApplication.objects.values())
        return JsonResponse({'job_applications': job_applications})