pipeline {
  agent any
  stages {
    stage('Pull from Git') {
      steps {
        git(url: 'https://github.com/kaiihudson/mtgi.git', branch: 'dev', changelog: true)
      }
    }
    stage('npm install') {
      steps {
        node(label: 'node6') {
          sh 'npm install'
        }

      }
    }
  }
}