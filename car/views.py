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
    body = request.GET.get('model_body')
    if body == 'sedan':
        MODEL_BODIES = ["Compact Cars", "Large Cars", "Midsize Cars", "Mini Compact Cars", "Subcompact Cars"]
        car_list = list(Trim.objects.filter(model_body__in=MODEL_BODIES))
    elif body == 'convertible':
        car_list = list(Trim.objects.filter(model_trim__icontains='convertible'))
    elif body == 'coupe':
        car_list = list(Trim.objects.filter(model_trim__icontains='coupe'))
    elif body == 'hybrid':
        car_list = list(Trim.objects.filter(model_trim__icontains='hybrid'))
    elif body == 'minivan':
        MODEL_BODIES = ["Minivan", "Passenger Vans", "Cargo Vans"]
        car_list = list(Trim.objects.filter(model_body__in=MODEL_BODIES))
    elif body == 'sport':
        car_list = list(Trim.objects.filter(model_body__iexact="Two Seaters"))
    elif body == 'suv':
        MODEL_BODIES = ["Small Sport Utility Vehicles", "Sport Utility Vehicles", "Standard Sport Utility Vehicles"]
        car_list = list(Trim.objects.filter(model_body__in=MODEL_BODIES))
    elif body == 'truck':
        MODEL_BODIES = ["Small Pickup Trucks", "Standard Pickup Trucks"]
        car_list = list(Trim.objects.filter(model_body__in=MODEL_BODIES))


    return_list = []
    for car in car_list:
        return_list.append({
        'id': car.id,
        'model_make_display': car.model_make_display,
        'model_name': car.model_name,
        'model_trim': car.model_trim,
        'model_transmission_type': car.model_transmission_type,
        'model_lkm_hwy': car.model_lkm_hwy,
        'model_lkm_city': car.model_lkm_city
        })
    return JsonResponse(return_list, safe=False)

def values(request):
    my_list = []
    col_name = request.GET.get('col')
    for el in list(Trim.objects.values(col_name).distinct(col_name)):
        my_list.append(el[col_name])
    return JsonResponse(my_list, safe=False)
