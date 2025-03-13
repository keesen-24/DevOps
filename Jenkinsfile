pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1' // Set AWS region
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the website...'
                // Add build steps if needed
            }
        }
        stage('Deploy to S3') {
            steps {
                withCredentials([aws(credentialsId: 'aws-credentials', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    sh 'aws s3 sync . s3://my-dynamic-site --delete'
                }
            }
        }
    }
}
