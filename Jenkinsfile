pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
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
