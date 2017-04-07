from rest_framework import viewsets, filters
from car.models import Make, CarModel, Trim
from car.serializers import MakeSerializer, CarModelSerializer, TrimSerializer

from .utils import generic_search
from django.shortcuts import render_to_response, redirect
from django.http import JsonResponse, HttpResponse


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


class TrimViewSet(viewsets.ModelViewSet):
    queryset = Trim.objects.all()
    serializer_class = TrimSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ("model_id", "model_make_id", "model_name", "model_trim", "model_year", "model_body", "model_engine_position", "model_engine_cc", "model_engine_cyl", "model_engine_type", "model_engine_valves_per_cyl", "model_engine_power_ps", "model_engine_power_rpm", "model_engine_torque_nm", "model_engine_torque_rpm", "model_engine_bore_mm", "model_engine_stroke_mm", "model_engine_compression", "model_engine_fuel", "model_top_speed_kph", "model_0_to_100_kph", "model_drive", "model_transmission_type", "model_seats", "model_doors", "model_weight_kg", "model_length_mm", "model_width_mm", "model_height_mm", "model_wheelbase_mm", "model_lkm_hwy", "model_lkm_mixed", "model_lkm_city", "model_fuel_cap_l", "model_sold_in_us", "model_co2", "model_make_display", "make_display", "make_country")

QUERY="query"

MODEL_MAP = {
    Trim: [
    "model_make_id",
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
    ]
}

def search(request):
    object = []
    for model,fields in MODEL_MAP.iteritems():
        objects+=generic_search(request,model,fields,QUERY)
        return render_to_response("search_results.html",
                                {
                                "objects":objects,
                                "search_string": request.GET.get(QUERY, "")
                                }
        )

def values(request):
    my_list = []
    col_name = request.GET.get('col')
    for el in list(Trim.objects.values(col_name).distinct(col_name)):
        my_list.append(el[col_name])
    return JsonResponse(my_list, safe=False)
    # return HttpResponse(stuff)
