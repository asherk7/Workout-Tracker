import requests
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from WorkoutApp.models import Workouts, PersonalRecords, Muscles
from WorkoutApp.serializers import WorkoutsSerializer, PersonalRecordsSerializer, MusclesSerializer   

# Create your views here.

@csrf_exempt
def workoutsAPI(request, id=0):
    if request.method=='GET': 
        workouts = Workouts.objects.all() #grabs all the model data
        workouts_serializer = WorkoutsSerializer(workouts, many=True) #turns the data into a JSON
        return JsonResponse(workouts_serializer.data, safe=False) #returns the JSON
    
    elif request.method=='POST':
        workout_data=JSONParser().parse(request)
        workout_serializer = WorkoutsSerializer(data=workout_data)
        if workout_serializer.is_valid(): #checks if it contains the right data/fields
            workout_serializer.save() #creates new instance of the model and saves it to the database
            return JsonResponse("Workout Added Successfully", safe=False)
        return JsonResponse("Failed to Add Workout", safe=False)
    
    elif request.method=='PUT':
        workout_data = JSONParser.parse(request)
        workout = Workouts.objects.get(WorkoutID=workout_data['WorkoutID']) #grabs the specific workout instance
        workout_serializer = WorkoutsSerializer(workout, data=workout_data) #maps that instance to the new data
        if workout_serializer.is_valid():
            workout_serializer.save()
            return JsonResponse("Updated the Workout Successfully", safe=False)
        return JsonResponse("Failed to Update the Workout")
    
    elif request.method=='DELETE':
        workout = Workouts.objects.get(WorkoutID=id)
        workout.delete()
        return JsonResponse('Deleted the Workout Successfully', safe=False)

@csrf_exempt
def personalrecordsAPI(request, id=0):
    if request.method=='GET': 
        personalrecords = PersonalRecords.objects.all()
        personalrecords_serializer = PersonalRecordsSerializer(personalrecords, many=True)
        return JsonResponse(personalrecords_serializer.data, safe=False)
    
    elif request.method=="POST":
        record_data=JSONParser().parse(request)
        record_serializer = PersonalRecordsSerializer(data=record_data)
        if record_serializer.is_valid():
            record_serializer.save()
            return JsonResponse("Record Added Successfully", safe=False)
        return JsonResponse("Failed to add Personal Record", safe=False)
    
    elif request.method=="PUT":
        record_data=JSONParser.parse(request)
        record = PersonalRecords.objects.get(RecordID=record_data['RecordID'])
        record_serializer = PersonalRecordsSerializer(record, data=record_data)
        if record_serializer.is_valid():
            record_serializer.save()
            return JsonResponse("Updated the Personal Record Successfully", safe=False)
        return JsonResponse("Failed to Update the Record", safe=False)
    
    elif request.method=="DELETE":
        record=PersonalRecords.objects.get(RecordID=id)
        record.delete()
        return JsonResponse('Deleted the Record Successfully', safe=False)

@csrf_exempt
def musclesAPI(request):
    if request.method == "GET":
        muscles = Muscles.objects.all()
        muscles_serializer = MusclesSerializer(muscles, many=True)
        return JsonResponse(muscles_serializer.data, safe=False)

    elif request.method == "POST":
        muscle_data = JSONParser.parse(request)
        muscle = muscle_data['muscle']
        api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
        response = requests.get(api_url, headers={'X-Api-Key': 'bjYevCAS2Tzqek1eiKWLEg==p7fCMIQqd5OW593q'})
        exercises = ""
        if response.status_code == requests.codes.ok:
            for i in response.text:
                exercises += i['name'] + ", "
            muscle_model = Muscles(MuscleID=0, Name=muscle, Exercises=exercises)
            muscle_serializer = MusclesSerializer(data=muscle_model)
            if muscle_serializer.is_valid():
                muscle_serializer.save()
                return JsonResponse("Muscle Added Successfully", safe=False)
            return JsonResponse("Failed to Add Muscle", safe=False)
        else:
            return JsonResponse("Failed to Retrieve Exercises", safe=False)

    elif request.method=="PUT":
        prev_muscle = Muscles.objects.get(MuscleID=0)
        prev_muscle.delete()
        muscle_data = JSONParser.parse(request)
        muscle = muscle_data['muscle']
        api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
        response = requests.get(api_url, headers={'X-Api-Key': 'bjYevCAS2Tzqek1eiKWLEg==p7fCMIQqd5OW593q'})
        exercises = ""
        if response.status_code == requests.codes.ok:
            for i in response.text:
                exercises += i['name'] + ", "
            muscle_model = Muscles(MuscleID=0, Name=muscle, Exercises=exercises)
            muscle_serializer = MusclesSerializer(data=muscle_model)
            if muscle_serializer.is_valid():
                muscle_serializer.save()
                return JsonResponse("Muscle Added Successfully", safe=False)
            return JsonResponse("Failed to Add Muscle", safe=False)
        else:
            return JsonResponse("Failed to Retrieve Exericses", safe=False)
    
    elif request.method=="DELETE":
        muscle = Muscles.objects.get(MuscleID=0)
        muscle.delete()
        return JsonResponse('Deleted the Muscle Successfully', safe=False)

@csrf_exempt
def splitsAPI(request):
    if request.method=="GET":
        return JsonResponse("Splits", safe=False)
    else:
        return JsonResponse("Not Splits", safe=False)