pipeline {
    agent any{
       stages{
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
}
