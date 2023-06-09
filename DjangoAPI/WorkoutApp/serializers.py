from rest_framework import serializers
from WorkoutApp.models import Workouts, PersonalRecords, Muscles

#serializers convert our models and queries to python types
#serializers also convert python types to JSON so that our frontend can read it

class WorkoutsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = '__all__' #takes in all fields from the model

class PersonalRecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalRecords
        fields = '__all__'

class MusclesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muscles
        fields = '__all__'