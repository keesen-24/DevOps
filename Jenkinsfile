pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/keesen-24/DevOps.git'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building application..."'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp -r /var/lib/jenkins/.jenkins/workspace/Dynamic_site/weather-app/* /var/www/html/'
            }
        }
    }
}
