pipeline {
    agent any
    environment {
        S3_BUCKET = 'my-dynamic-site'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the website...'
                // Add build steps if required
            }
        }
        stage('Deploy to S3') {
            steps {
                echo 'Deploying to AWS S3...'
                sh 'aws s3 sync . s3://$S3_BUCKET --delete'
            }
        }
    }
}
