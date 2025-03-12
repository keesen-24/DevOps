pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'  // Change to your AWS region
        S3_BUCKET = 'my-dynamic-site'  // Change to your actual S3 bucket name
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/keesen-24/DevOps.git'
            }
        }

        stage('Deploy to AWS S3') {
            steps {
                withEnv(["PATH+EXTRA=/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"]) {
                sh '''
                aws s3 sync . s3://$S3_BUCKET --delete
                '''
                }
        }
    }
}
