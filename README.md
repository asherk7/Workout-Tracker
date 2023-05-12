# Workout-Tracker
Technologies used: ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white) ![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
* Built a website that can be used to track workouts and personal bests, and can also provide good workout splits and exercises for certain muscle groups  
* Created the website using Django and Angular.js  
* Created a CI/CD pipeline using jenkins on a LINUX environment  
* Used SQLite for the database  

### Checking the jenkins CI/CD pipeline

1. Run
    ```sh
    java -jar jenkins.war --httpPort=8080  
    ```
2. Go to http://localhost:8080 and check the pipeline

### Installation
 
1. Clone the repo
   ```sh
   git clone https://github.com/asherk7/Workout-Tracker.git
   ```
2. Install the requirements
    ```sh
    pip install -r requirements.txt
    ```
3. Run the server
   ```sh
   python ./manage.py runserver
   ```
4. Open the server

<p align="right">(<a href="#readme-top">back to top</a>)</p>