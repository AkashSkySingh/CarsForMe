

from rest_framework import viewsets, filters
from car.models import Make, CarModel
from car.serializers import MakeSerializer, CarModelSerializer

# Create your views here.


class MakeViewSet(viewsets.ModelViewSet):
    queryset = Make.objects.all()
    serializer_class = MakeSerializer
    filter_backends = (filters.DjangoFilterBackend,)


class CarModelViewSet(viewsets.ModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('model_make_id', 'model_name')
