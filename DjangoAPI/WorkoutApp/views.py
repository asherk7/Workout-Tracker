from django.http import HttpResponse
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
            return HttpResponse("Added Successfully")
        else:
            return JsonResponse("Failed to Add Workout", safe=False)
    
    elif request.method=='PUT':
        workout_data = JSONParser().parse(request)
        workout = Workouts.objects.get(WorkoutID=workout_data['WorkoutID']) #grabs the specific workout instance
        workout_serializer = WorkoutsSerializer(workout, data=workout_data) #maps that instance to the new data
        if workout_serializer.is_valid():
            workout_serializer.save()
            return HttpResponse("Added Successfully")
        else:
            return JsonResponse("Failed to Update the Workout")
    
    elif request.method=='DELETE':
        workout = Workouts.objects.get(WorkoutID=id)
        workout.delete()
        return JsonResponse("Deleted Successfully", safe=False)

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
            return HttpResponse("Added Successfully")
        else:
            return JsonResponse("Failed to add Personal Record", safe=False)
    
    elif request.method=="PUT":
        record_data=JSONParser().parse(request)
        record = PersonalRecords.objects.get(RecordID=record_data['RecordID'])
        record_serializer = PersonalRecordsSerializer(record, data=record_data)
        if record_serializer.is_valid():
            record_serializer.save()
            return HttpResponse("Added Successfully")
        else:
            return JsonResponse("Failed to Update the Record", safe=False)
    
    elif request.method=="DELETE":
        record=PersonalRecords.objects.get(RecordID=id)
        record.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def musclesAPI(request):
    if request.method == "GET":
        muscles = Muscles.objects.all()
        muscles_serializer = MusclesSerializer(muscles, many=True)
        return JsonResponse(muscles_serializer.data, safe=False)

    elif request.method == "POST":
        muscles = Muscles.objects.all()
        muscles.delete()
        muscle_data = JSONParser().parse(request)
        muscle = muscle_data['Muscle']
        api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
        response = requests.get(api_url, headers={'X-Api-Key': 'bjYevCAS2Tzqek1eiKWLEg==p7fCMIQqd5OW593q'})
        if response.status_code == requests.codes.ok:
            for i in response.json():
                muscle_serializer = MusclesSerializer(data=i)
                if muscle_serializer.is_valid():
                    muscle_serializer.save()
            return JsonResponse("Exercises Retrieved Successfully", safe=False)
        else:
            return JsonResponse("Failed to Retrieve Exercises", safe=False)
    
    elif request.method=="DELETE":
        muscles = Muscles.objects.all()
        muscles.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def splitsAPI(request):
    if request.method=="GET":
        return HttpResponse("Splits API")