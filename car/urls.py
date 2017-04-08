from django.conf.urls import url

from . import views

app_name = 'car'
urlpatterns = [
    url(r'^$', views.values, name='values'),
]
