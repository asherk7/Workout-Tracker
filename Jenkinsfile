pipeline{
    agent any
    stages{
        stage('Setting up Python Virtual Environment'){
            steps{
                sh '''
                chmod +x envsetup.sh
                ./envsetup.sh
                '''
            }
        }
        stage('Setting up Gunicorn Setup'){
            steps{
                sh '''
                chmod +x gunicorn.sh
                ./gunicorn.sh
                '''
            }
        }
        stage('setting up NGINX'){
            steps{
                sh '''
                chmod +x nginx.sh
                ./nginx.sh
                '''
            }
        }
    }
}