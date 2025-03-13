pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID = credentials('aws-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-key')
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the website...'
                // Add build commands if needed (e.g., npm run build for React apps)
            }
        }
        stage('Deploy to S3') {
            steps {
                withEnv(["AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"]) {
                    sh 'aws s3 sync . s3://my-dynamic-site --delete'
                }
            }
        }
    }
}
