pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the code from GitHub
                    git branch: 'main', url: 'https://github.com/mohansaikiran/sit753-devops-pipeline.git'

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

        // stage('Push Image to Registry') {
        //     steps {
        //         script {
        //             // Optional: Push image to a registry like DockerHub or Azure Container Registry
        //             sh 'docker tag sit753-devops-pipeline <registry-url>/sit753-devops-pipeline:latest'
        //             sh 'docker push <registry-url>/sit753-devops-pipeline:latest'
        //         }
        //     }
        // }

        // stage('Deploy to Kubernetes') { // 7th Stage
        //     steps {
        //         script {
        //             // Deploy the application to Kubernetes
        //             sh 'kubectl apply -f scripts/deployment.yaml'
        //         }
        //     }
        // }

        // stage('Deploy to Docker') {
        //     steps {
        //         script {
        //             // Run the app in a Docker container
        //             sh 'docker run -d -p 3000:3000 sit753-devops-pipeline'
        //         }
        //     }
        // }
    }

    post {
        success {
            echo 'Build and test stages completed successfully!'
        }

        failure {
            echo 'Build or test stage failed.'
        }

        always {
            // This will ensure Jenkins completes the process
            script {
                echo 'Cleaning up and stopping process.'
                sh 'docker ps -q | xargs --no-run-if-empty docker stop || true'
                sh 'docker ps -a -q | xargs --no-run-if-empty docker rm || true'
            }
        }
    }
}