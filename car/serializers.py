from car.models import Make, CarModel, Trim
from rest_framework import serializers


class MakeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Make
        fields = ('id', 'make_id', 'make_country', 'make_display',)


class CarModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CarModel
        fields = ('id', 'model_name', 'model_make_id',)

class TrimSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trim
        fields = ('id', "model_id", "model_make_id", "model_name", "model_trim", "model_year", "model_body", "model_engine_position", "model_engine_cc", "model_engine_cyl", "model_engine_type", "model_engine_valves_per_cyl", "model_engine_power_ps", "model_engine_power_rpm", "model_engine_torque_nm", "model_engine_torque_rpm", "model_engine_bore_mm", "model_engine_stroke_mm", "model_engine_compression", "model_engine_fuel", "model_top_speed_kph", "model_0_to_100_kph", "model_drive", "model_transmission_type", "model_seats", "model_doors", "model_weight_kg", "model_length_mm", "model_width_mm", "model_height_mm", "model_wheelbase_mm", "model_lkm_hwy", "model_lkm_mixed", "model_lkm_city", "model_fuel_cap_l", "model_sold_in_us", "model_co2", "model_make_display", "make_display", "make_country")
