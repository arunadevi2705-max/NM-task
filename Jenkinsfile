pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/arunadevi2705-max/NM-task'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t cicd-high-traffic-app .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}

