from car.models import Make, CarModel
from rest_framework import serializers


class MakeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Make
        fields = ('make_id', 'make_country', 'make_display')


class CarModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CarModel
        fields = ('model_name', 'model_make_id')
