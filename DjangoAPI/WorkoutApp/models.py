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
    MuscleID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    Type = models.CharField(max_length=50)
    Muscle = models.CharField(max_length=50)
    Equipment = models.CharField(max_length=50)
    Difficulty = models.CharField(max_length=50)
    Instructions = models.CharField(max_length=300)

#when changes are made, run the following commands:
#python manage.py makemigrations WorkoutApp
#python manage.py migrate WorkoutApp