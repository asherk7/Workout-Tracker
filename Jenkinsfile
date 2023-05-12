pipeline{
    agent any
    stages{
        stage('Setting up Python Virtual Environment'){
            steps{
                bat '''
                chmod +x envsetup.sh
                ./envsetup.sh
                '''
            }
        }
        stage('Setting up Gunicorn Setup'){
            steps{
                bat '''
                chmod +x gunicorn.sh
                ./gunicorn.sh
                '''
            }
        }
        stage('setting up NGINX'){
            steps{
                bat '''
                chmod +x nginx.sh
                ./nginx.sh
                '''
            }
        }
    }
}