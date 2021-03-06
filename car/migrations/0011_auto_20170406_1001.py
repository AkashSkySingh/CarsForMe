# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-06 17:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0010_trim'),
    ]

    operations = [
        migrations.AddField(
            model_name='trim',
            name='model_co2',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='trim',
            name='model_engine_cc',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='trim',
            name='model_engine_power_ps',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='trim',
            name='model_engine_torque_nm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='trim',
            name='model_engine_type',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='trim',
            name='model_weight_kg',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='make_country',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='make_display',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_0_to_100_kph',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_body',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_doors',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_drive',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_bore_mm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_compression',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_cyl',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_fuel',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_position',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_power_rpm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_stroke_mm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_torque_rpm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_engine_valves_per_cyl',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_fuel_cap_l',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_height_mm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_length_mm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_lkm_city',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_lkm_hwy',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_lkm_mixed',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_make_display',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_make_id',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_seats',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_sold_in_us',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_top_speed_kph',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_transmission_type',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_wheelbase_mm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_width_mm',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='trim',
            name='model_year',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
