const open = require('open')
const pm2 = require('pm2')
const shell = require('shelljs')

shell.exec('npm install')

pm2.start(
  {
    script: 'npm start',
    autorestart: false,
  },
  (err) => {
    setTimeout(() => {
      open('http://localhost:1207/admin/profile')
    }, 3000)

    if (err) {
      throw err
    }
  }
)

process.on('SIGINT', function () {
  pm2.stop('all')
})