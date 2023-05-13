from django.shortcuts import render

# Create your views here.

def index(request):
    pass

def workouts(request):
    pass

def personal_records(request):
    pass

def muscle_groups(request):
    pass
    """
    import requests
    muscle = 'biceps'
    api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
    response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
    if response.status_code == requests.codes.ok:
        print(response.text)
    else:
        print("Error:", response.status_code, response.text)
    """

def splits(request):
    pass