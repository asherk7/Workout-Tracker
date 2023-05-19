from django.db import models

# Create your models here.

class Workouts(models.Model):
    WorkoutID = models.AutoField(primary_key=True)
    Split = models.CharField(max_length=50)
    Date = models.CharField(max_length=50)
    Duration = models.CharField(max_length=50)
    Exercises = models.CharField(max_length=300)
    Rating = models.CharField(max_length=50)
    #one workout model contains many exercise models

class PersonalRecords(models.Model):
    RecordID = models.AutoField(primary_key=True)
    Exercise = models.CharField(max_length=50)
    Weight = models.CharField(max_length=50)
    Reps = models.CharField(max_length=50)
    Date = models.CharField(max_length=50)
    BodyWeight = models.CharField(max_length=50)

class Muscles(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    muscle = models.CharField(max_length=50)
    equipment = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50)
    instructions = models.CharField(max_length=2000)

#when changes are made, run the following commands:
#python manage.py makemigrations WorkoutApp
#python manage.py migrate WorkoutApp