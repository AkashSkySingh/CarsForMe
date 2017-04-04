from django.shortcuts import render

# Create your views here.


def car_detail(request):
    return render(request, 'car/car_detail.html', {})
