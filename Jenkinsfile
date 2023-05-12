pipeline{
    agent any
    stages{
        stage('Setting up Python Virtual Environment'){
            steps{
                bat '''
                envsetup.sh
                '''
            }
        }
        stage('Setting up Gunicorn Setup'){
            steps{
                bat '''
                gunicorn.sh
                '''
            }
        }
        stage('setting up NGINX'){
            steps{
                bat '''
                nginx.sh
                '''
            }
        }
    }
}