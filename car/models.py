
# Create your models here.

from django.db import models
from django.utils import timezone


class Car(models.Model):
    make = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    model_year = models.SmallIntegerField(default=2017)
    citympg = models.SmallIntegerField(default=25)
    hwmpg = models.SmallIntegerField(default=30)


    created_date = models.DateTimeField(
            default=timezone.now)
    # published_date = models.DateTimeField(
    #         blank=True, null=True)
    #
    # def publish(self):
    #     self.published_date = timezone.now()
    #     self.save()

    def __str__(self):
        return self.model

class Make(models.Model):
    make_display = models.CharField(max_length=200, unique=True)
    make_id = models.CharField(max_length=200)
    make_country = models.CharField(max_length=200)

    def __str__(self):
        return self.make_display

class CarModel(models.Model):
    model_name = models.CharField(max_length=200, unique=True)
    model_make_id = models.ForeignKey("Make", to_field="make_display", db_column="make_display")

    def __str__(self):
        return self.model_name

class Trim(models.Model):
    model_id = models.CharField(max_length=200, unique=True)
    model_make_id = models.CharField(max_length=200, null=True)
    model_name = models.CharField(max_length=200, null=True)
    model_trim = models.CharField(max_length=200, null=True)
    model_year = models.CharField(max_length=200, null=True)
    model_body = models.CharField(max_length=200, null=True)
    model_engine_position = models.CharField(max_length=200, null=True)
    model_engine_cc = models.CharField(max_length=200, null=True)
    model_engine_cyl = models.CharField(max_length=200, null=True)
    model_engine_type = models.CharField(max_length=200, null=True)
    model_engine_valves_per_cyl = models.CharField(max_length=200, null=True)
    model_engine_power_ps = models.CharField(max_length=200, null=True)
    model_engine_power_rpm = models.CharField(max_length=200, null=True)
    model_engine_torque_nm = models.CharField(max_length=200, null=True)
    model_engine_torque_rpm = models.CharField(max_length=200, null=True)
    model_engine_bore_mm = models.CharField(max_length=200, null=True)
    model_engine_stroke_mm = models.CharField(max_length=200, null=True)
    model_engine_compression = models.CharField(max_length=200, null=True)
    model_engine_fuel = models.CharField(max_length=200, null=True)
    model_top_speed_kph = models.CharField(max_length=200, null=True)
    model_0_to_100_kph = models.CharField(max_length=200, null=True)
    model_drive = models.CharField(max_length=200, null=True)
    model_transmission_type = models.CharField(max_length=200, null=True)
    model_seats = models.CharField(max_length=200, null=True)
    model_doors = models.CharField(max_length=200, null=True)
    model_weight_kg = models.CharField(max_length=200, null=True)
    model_length_mm = models.CharField(max_length=200, null=True)
    model_width_mm = models.CharField(max_length=200, null=True)
    model_height_mm = models.CharField(max_length=200, null=True)
    model_wheelbase_mm = models.CharField(max_length=200, null=True)
    model_lkm_hwy = models.CharField(max_length=200, null=True)
    model_lkm_mixed = models.CharField(max_length=200, null=True)
    model_lkm_city = models.CharField(max_length=200, null=True)
    model_fuel_cap_l = models.CharField(max_length=200, null=True)
    model_sold_in_us = models.CharField(max_length=200, null=True)
    model_co2 = models.CharField(max_length=200, null=True)
    model_make_display = models.CharField(max_length=200, null=True)
    make_display = models.CharField(max_length=200, null=True)
    make_country = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.model_trim
