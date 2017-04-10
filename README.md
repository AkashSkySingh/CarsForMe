# CarsForMe: PRODUCTION_README

- [CarsForMe: Live][live]
- [CarsForMe: Github][github]

[live]: http://www.CarsForMe.net
[github]: https://github.com/AkashSkySingh/CarsForMe

## Features and Implementation

![front page](https://res.cloudinary.com/nightstock/image/upload/s--0pya1wTr--/c_scale,h_340/v1491803044/splash_wyxvjq.png)

![car detail](https://res.cloudinary.com/nightstock/image/upload/s--o99XniOt--/v1491803044/cardetail_ombczh.png)

### Filter by Car Size

[image here of splash page car size containers here]

All cars are stored as `trims` with columns like `model_make_id` which includes the car make, `model_name`, `doors`, `model_engine_cc`, etc. When a user clicks a model size, a API call gets sent and retrieves all cars that matches the size on the `model_body: "Compact Cars"`.

Sample State for Car Detail for each `model_trim`:

```js
{
    "id": 1,
    "model_id": "69703",
    "model_make_id": "Acura",
    "model_name": "ILX",
    "model_trim": "4dr Sedan (2.0L 4cyl 5A)",
    "model_year": "2017",
    "model_body": "Compact Cars",
    "model_engine_position": "",
    "model_engine_cc": "2000",
    "model_engine_cyl": "4",
    "model_engine_type": "Inline",
    "model_engine_valves_per_cyl": "4",
    "model_engine_power_ps": "150",
    "model_engine_power_rpm": null,
    "model_engine_torque_nm": "140",
    "model_engine_torque_rpm": null,
    "model_engine_bore_mm": null,
    "model_engine_stroke_mm": null,
    "model_engine_compression": "10.6",
    "model_engine_fuel": "Premium Unleaded (Required)",
    "model_top_speed_kph": null,
    "model_0_to_100_kph": null,
    "model_drive": "Front Wheel Driv",
    "model_transmission_type": "Automatic",
    "model_seats": null,
    "model_doors": "4",
    "model_weight_kg": "2955",
    "model_length_mm": null,
    "model_width_mm": null,
    "model_height_mm": null,
    "model_wheelbase_mm": null,
    "model_lkm_hwy": "35.0",
    "model_lkm_mixed": "28.0",
    "model_lkm_city": "24.0",
    "model_fuel_cap_l": "13",
    "model_sold_in_us": "1",
    "model_co2": null,
    "model_make_display": "Acura",
    "make_display": "Acura",
    "make_country": "USA"
},  
```

![filtered list](https://res.cloudinary.com/nightstock/image/upload/s--zk8Kz5cz--/c_scale,h_340/v1491803044/carlist_xudn8k.png)

### RESTful API to query CarsForMe Database

![api screenshot](https://res.cloudinary.com/booklog/image/upload/c_scale,h_360/v1491799709/Screen_Shot_2017-04-09_at_9.44.26_PM_yepusu.png)

Easy to use API to query the CarsForMe database. The response is in API view (JSON view optional). Allowed paths are api/makes, api/carmodels , and api/trims. The API query format is in:

  carsforme.net/api/`model`/?`filters`=ExactTerm&`filters`=ExactTerm

Base API:

https://www.carsforme.net/api/

Sample queries:

List of all models in database

https://www.carsforme.net/api/carmodels/

List of all Acura Models

https://www.carsforme.net/api/carmodels/?model_make_id=Acura

List of all Acura Model with Trims that have a 4 cylinder engine

https://www.carsforme.net/api/trims/?model_make_id=Acura&model_engine_cyl=4

List of all BMW Model with Trims that have a Inline-6 Engine (Not V6)

https://www.carsforme.net/api/trims/?model_make_id=BMW&model_engine_type=Inline&model_engine_cyl=6


### Django backend
```js

class TrimSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trim
        fields = ('id', "model_id", "model_make_id", "model_name", "model_trim", "model_year", "model_body", "model_engine_position", "model_engine_cc", "model_engine_cyl", "model_engine_type", "model_engine_valves_per_cyl", "model_engine_power_ps", "model_engine_power_rpm", "model_engine_torque_nm", "model_engine_torque_rpm", "model_engine_bore_mm", "model_engine_stroke_mm", "model_engine_compression", "model_engine_fuel", "model_top_speed_kph", "model_0_to_100_kph", "model_drive", "model_transmission_type", "model_seats", "model_doors", "model_weight_kg", "model_length_mm", "model_width_mm", "model_height_mm", "model_wheelbase_mm", "model_lkm_hwy", "model_lkm_mixed", "model_lkm_city", "model_fuel_cap_l", "model_sold_in_us", "model_co2", "model_make_display", "make_display", "make_country")
```


HyperLinkedModelSerializers in Django to filter the results. The fields above can also be applied as the filter to get the results that in the query.


### Google Custom Search Engine, Maps, and Places API

[image of google maps here]

On enter of the car detail page, a AJAX request using a Google Custom Search Engine results in a image search over a car website for the picture of the car.

On the car detail page, there is a html5 request for the geolocation. If the user accepts, the map shows the nearest 20 places that match the `model_make_id` of the car that is being shown. The map is zoomed out to around 180miles due to car dealerships being spread out.


### APIs & Libraries Used
- Google Custom Search Engine API
- Google Maps API
- Google Places API
- React-GMaps
- Django REST Framework



## Future Directions for the Project

In addition to the features already implemented, the next features are
outlined below:


### Search bar
Ability to enter the car model instead of selecting the predefined car shape,
for example, you can search "Civic" and the results page will bring up the car list full of Civic trims.

### Pricing
Ability to see the car base price under the results show page. Edmunds API
provide a "True Market Value". If we are able to obtain approval to Edmunds API,
we can implement the price feature.
