from django.conf.urls import url

from . import views

app_name = 'car'
urlpatterns = [
    url(r'^col-values', views.values, name='values'),
]
