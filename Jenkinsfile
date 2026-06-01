pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Job1 : Build'
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Test') {
            steps {
                echo 'Job2 : Test'
                sh 'echo Testing Successful'
            }
        }

        stage('Prod') {
            when {
                branch 'master'
            }
            steps {
                echo 'Job3 : Production Deployment'
                sh 'echo Deployment Successful'
            }
        }
    }
}
