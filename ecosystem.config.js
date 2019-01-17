module.exports = {
  apps: [{
    name: 'jdgri.me',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ['52.71.137.248'],
      key: '~/.ssh/id_rsa',
      ref: 'origin/master',
      repo: 'git@github.com:jdgri/jdgri.me.git',
      path: '/home/ubuntu',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}