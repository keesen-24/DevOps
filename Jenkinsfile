pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'  // Change to your AWS region
        EC2_USER = 'ec2-user'
        EC2_HOST = 'your-ec2-public-ip'
        DEPLOY_DIR = '/var/www/html'
    }
    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building application..."'
            }
        }
        stage('Deploy to EC2') {
            steps {
                sshagent(['your-ec2-ssh-key']) {
                    sh '''
                        scp -r * $EC2_USER@$EC2_HOST:$DEPLOY_DIR
                        ssh $EC2_USER@$EC2_HOST 'sudo systemctl restart apache2'
                    '''
                }
            }
        }
    }
}
