pipeline {
  agent {
    docker {
      image 'slave:p72n10'
    }

  }
  stages {
    stage('npm install') {
      steps {
        echo 'INSTALL DEPENDENCIES'
        sh 'npm install'
        echo 'COMPLETE'
      }
    }
  }
}