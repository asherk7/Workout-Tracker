from django.urls import re_path
from WorkoutApp import views

urlpatterns = [
    re_path(r'^workouts/$', views.workoutsAPI),
    re_path(r'^workouts/([0-9]+)$', views.workoutsAPI),

    re_path(r'^personalrecords/$', views.personalrecordsAPI),
    re_path(r'^personalrecords/([0-9]+)$', views.personalrecordsAPI),

    re_path(r'^muscles/$', views.musclesAPI),

    re_path(r'^splits/$', views.splitsAPI),
    re_path(r'', views.workoutsAPI)
]