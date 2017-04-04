
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
