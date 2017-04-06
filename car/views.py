from django.shortcuts import render
from rest_framework import viewsets
from car.models import Make, CarModel
from car.serializers import MakeSerializer, CarModelSerializer

# Create your views here.


class MakeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Make.objects.all()
    serializer_class = MakeSerializer


class CarModelViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
