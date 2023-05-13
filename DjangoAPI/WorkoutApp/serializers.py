from rest_framework import serializers
from WorkoutApp.models import Workouts, Exercise, PersonalRecords

#serializers convert our models and queries to python types
#serializers also convert python types to JSON so that our frontend can read it

class WorkoutsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = ('workoutid', 'split', 'date', 'duration', 'exercises')

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('name', 'sets', 'reps', 'weight')

class PersonalBestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalRecords
        fields = ('exercise', 'weight', 'reps', 'date', 'bodyweight')