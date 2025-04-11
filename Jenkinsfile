pipeline {
    agent any
    // tools (nodejs "nodejs")
    stages {
        stage('Clone Repository'){
            steps {
                git branch: 'main', url: 'https://github.com/prasadpgosavi/Nodejs-hello-world.git'
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Perform API testing'){
            steps {
                sh 'npm test'
            }
        }
        stage('Start Application'){
            
            steps {
                sh 'npm start'
            }
        }
    }
}
