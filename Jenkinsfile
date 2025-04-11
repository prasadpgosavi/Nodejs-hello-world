@Library('nodejs-pipeline-lib') _

pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                cloneRepo(repoUrl: 'https://github.com/prasadpgosavi/Nodejs-hello-world.git')
            }
        }
        stage('Install Dependencies') {
            steps {
                installDependencies()
            }
        }
        stage('Perform API Testing') {
            steps {
                runTests()
            }
        }
        stage('Start Application') {
            steps {
                startApp()
            }
        }
    }
}
