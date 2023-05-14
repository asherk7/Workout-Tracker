from django.db import models

# Create your models here.

class Exercise(models.Model):
    ExerciseID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    Sets = models.IntegerField()
    Reps = models.IntegerField()
    Weight = models.IntegerField()

    def __repr__(self):
        return self.Name
    #related name is used to access all the exercise models associated with the workout model

class Workouts(models.Model):
    WorkoutID = models.AutoField(primary_key=True)
    Split = models.CharField(max_length=50)
    Date = models.DateField()
    Duration = models.IntegerField()
    Exercises = models.ManyToManyField(Exercise)
    #one workout model contains many exercise models

class PersonalRecords(models.Model):
    RecordID = models.AutoField(primary_key=True)
    Exercise = models.CharField(max_length=50)
    Weight = models.IntegerField()
    Reps = models.IntegerField()
    Date = models.DateField()
    BodyWeight = models.IntegerField()

#when changes are made, run the following commands:
#python manage.py makemigrations WorkoutApp
#python manage.py migrate WorkoutApp