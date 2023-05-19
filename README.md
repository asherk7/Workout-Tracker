# Workout-Tracker
Technologies used: ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)  
* Built a website that can be used to track workouts and personal bests, and can also provide good workout splits and exercises for certain muscle groups  
* Created the website by connecting the Django backend with the Angular frontend  
* Created a CI/CD pipeline using jenkins on a LINUX environment  
* Utilized Nginx to increase the perfomance on the webserver  
* Used gunicorn for increasing the processing speed and running the pipeline through the gunicorn server  
* Utilized gunicorn and nginx for the jenkins pipeline for migrations, file collection, and reverse proxy  
* Used an API from https://api-ninjas.com/api/exercises  

### Checking the jenkins CI/CD pipeline

1. Install Jenkins
    ```sh
    wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -

    sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'

    sudo apt-get update

    sudo apt-get install jenkins
    ```
2. Create the jenkins server
    ```sh
    sudo systemctl daemon-reload

    sudo systemctl start jenkins

    sudo systemctl start nginx
    ```
3. Make sure the server is running
    ```sh
    sudo systemctl status jenkins
    ```
4. Go to http://localhost:8080 and check the pipeline, to turn it off, run
    ```sh
    sudo systemctl stop jenkins

    sudo systemctl stop nginx
    ```

### Installation and Running
 
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
   #In the Workout-Tracker directory
   
   cd DjangoAPI

   python manage.py runserver
   
   #In a different terminal

   cd Angular

   ng serve 
   ```
4. Open the server on the localhost
