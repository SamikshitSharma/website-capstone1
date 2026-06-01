pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Job1 : Build'
                sh 'docker build -t website-app .'
            }
        }

        stage('Test') {
            steps {
                echo 'Job2 : Test'
                sh 'ls -la'
            }
        }

        stage('Prod') {
            when {
                branch 'master'
            }
            steps {
                echo 'Job3 : Production Deployment'

                sh '''
                docker stop website-container || true
                docker rm website-container || true

                docker run -d \
                --name website-container \
                -p 80:80 \
                website-app
                '''
            }
        }
    }
}
