pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'  // Change to your AWS region
        EC2_USER = 'ec2-user'
        EC2_HOST = '3.83.141.112'
        DEPLOY_DIR = '/var/www/html'
    }
    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/keesen-24/DevOps.git'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building application..."'
            }
        }
        stage('Deploy to EC2') {
            steps {
                sshagent(['new-key']) {
                    sh '''
                        scp -r * $EC2_USER@$EC2_HOST:$DEPLOY_DIR
                        ssh $EC2_USER@$EC2_HOST 'sudo systemctl restart apache2'
                    '''
                }
            }
        }
    }
}
