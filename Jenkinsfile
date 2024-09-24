pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the code from GitHub
                    git url: 'https://github.com/your-username/your-repo-name'

                    // Build Docker image
                    sh 'docker build -t sit753-devops-pipeline .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests using npm
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                script {
                    // Run the app in a Docker container
                    sh 'docker run -d -p 3000:3000 sit753-devops-pipeline'
                }
            }
        }
    }
}