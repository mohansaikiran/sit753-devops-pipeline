pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Pull the code from GitHub
                    git branch: 'main', url: 'https://github.com/mohansaikiran/sit753-devops-pipeline.git'

                    // Build Docker image
                    sh "docker build -t sit753-devops-pipeline:$BUILD_NUMBER ."
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

            post {
                success {
                    emailext attachmentsPattern: 'test-results.log',
                            body: 'Automation testing using Mocha and Chai completed successfully',
                            subject: 'Testing Status: SUCCESS',
                            to:'kiranms20@gmail.com'
                }
                failure {
                    emailext attachmentsPattern: 'test-results.log',
                            body: 'Automation testing using Mocha and Chai failed. Please check logs!',
                            subject: 'Testing Status: FAILURE',
                            to:'kiranms20@gmail.com'
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

        stage('Deploy to Kubernetes') { // 7th Stage
            steps {
                script {
                    // Deploy the application to Kubernetes
                    sh "sed -i 's|image: .*|image: sit753-devops-pipeline:${BUILD_NUMBER}|' scripts/deployment.yaml"
                    sh 'kubectl apply -f scripts/deployment.yaml'
                }
            }
        }

        // stage('Deploy to Docker') {
        //     steps {
        //         script {
        //             // Run the app in a Docker container
        //             sh 'docker run -d -p 3000:3000 sit753-devops-pipeline'
        //         }
        //     }
        // }
    }
}