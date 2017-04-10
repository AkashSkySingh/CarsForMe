# CarsForMe

- [CarsForMe: Live][live]
- [CarsForMe: Github][github]

[live]: https://www.CarsForMe.net
[github]: https://github.com/AkashSkySingh/CarsForMe

## Features and Implementation


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

### Google Custom Search Engine, Maps, and Places API

[image of google maps here]

On enter of the car detail page, a AJAX request using a Google Custom Search Engine results in a image search over a car website for the picture of the car.

On the car detail page, there is a html5 request for the geolocation. If the user accepts, the map shows the nearest 20 places that match the `model_make_id` of the car that is being shown. The map is zoomed out to around 180miles due to car dealerships being spread out.


### APIs
- Google Custom Search Engine API
- Google Maps API
- Google Places API

### React Libraries
- React-GMaps

###

###

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
