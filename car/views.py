from rest_framework import viewsets, filters
from car.models import Make, CarModel, Trim
from car.serializers import MakeSerializer, CarModelSerializer, TrimSerializer
from django.shortcuts import render_to_response, redirect
from django.http import JsonResponse

# Create your views here.

class MakeViewSet(viewsets.ModelViewSet):
    queryset = Make.objects.all()
    serializer_class = MakeSerializer
    filter_backends = (filters.DjangoFilterBackend,)


class CarModelViewSet(viewsets.ModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('id', 'model_make_id', 'model_name')


class TrimViewSet(viewsets.ModelViewSet):
    queryset = Trim.objects.all()
    serializer_class = TrimSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = (
        "id",
        "model_make_id",
        "model_name",
        "model_trim",
        "model_year",
        "model_body",
        "model_engine_position",
        "model_engine_cc",
        "model_engine_cyl",
        "model_engine_type",
        "model_engine_valves_per_cyl",
        "model_engine_power_ps",
        "model_engine_power_rpm",
        "model_engine_torque_nm",
        "model_engine_torque_rpm",
        "model_engine_bore_mm",
        "model_engine_stroke_mm",
        "model_engine_compression",
        "model_engine_fuel",
        "model_top_speed_kph",
        "model_0_to_100_kph",
        "model_drive",
        "model_transmission_type",
        "model_seats",
        "model_doors",
        "model_weight_kg",
        "model_length_mm",
        "model_width_mm",
        "model_height_mm",
        "model_wheelbase_mm",
        "model_lkm_hwy",
        "model_lkm_mixed",
        "model_lkm_city",
        "model_fuel_cap_l",
        "model_sold_in_us",
        "model_co2",
        "model_make_display",
        "make_display",
        "make_country"
    )

def car_list(request):
    my_list = []
    body = request.GET.get('model_body')
    if body == 'sedan':
        # MODEL_BODIES = ["Compact Cars", "Large Cars", "Midsize Cars", "Mini Compact Cars", "Subcompact Cars"]
        my_list = list(Trim.objects.filter(model_body__in=["Subcompact Cars"]).first())
    # request_params = request.GET
    # model_body = request.GET.get('col')
    # for el in list(Trim.objects.):
    #     my_list.append(el[col_name])
    return JsonResponse(str(my_list), safe=False)

def values(request):
    my_list = []
    col_name = request.GET.get('col')
    for el in list(Trim.objects.values(col_name).distinct(col_name)):
        my_list.append(el[col_name])
    return JsonResponse(my_list, safe=False)
