module.exports = {
  apps: [{
    name: 'jdgri.me',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ['18.234.24.238'],
      key: '~/.ssh/aws/jdgrime.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jdgri/jdgri.me.git',
      path: '/home/ubuntu',
      'pre-deploy': 'git reset --hard',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
