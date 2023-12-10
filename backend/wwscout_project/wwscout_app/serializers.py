from rest_framework import serializers
from .models import JobApplication
from .models import Peer

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'

class PeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peer
        fields = '__all__'