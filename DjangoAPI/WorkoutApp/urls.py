from django.conf.urls import url
from WorkoutApp import views

urlpatterns = [
    url(r'^workouts/$', views.workoutsAPI),
    url(r'^workouts/([0-9]+)$', views.workoutsAPI),

    url(r'^personalrecords/$', views.personalrecordsAPI),
    url(r'^personalrecords/([0-9]+)$', views.personalrecordsAPI),

    url(r'^muscles/$', views.musclesAPI),

    url(r'^splits/$', views.splitsAPI),
]