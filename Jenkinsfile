pipeline {
     agent any
     stages {
         stage('Build') {
             steps {
                 sh 'echo "Building application..."'
                 sh 'echo "Building Application..."'
             }
         }
         stage('Deploy to EC2') {
             steps {
                 sshagent(['new-key']) {
                     sh '''
                         scp -r * ec2-user@3.83.141.112:/var/www/html/
                     '''
                 }
             }
         }
     }
 }
