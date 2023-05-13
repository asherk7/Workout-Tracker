pipeline{
    agent any
    stages {
        stage('Seting up Python Virtual Environment'){
            steps  {
                sh '''
                chmod +x Scripts/envsetup.sh
                ./envsetup.sh
                '''
            }
        }
        stage('Setting up Gunicorn'){
            steps {
                sh '''
                chmod +x Scripts/gunicorn.sh
                ./gunicorn.sh
                '''
            }
        }
        stage('setting up NGINX'){
            steps {
                sh '''
                chmod +x Scripts/nginx.sh
                ./nginx.sh
                '''
            }
        }
    }
}