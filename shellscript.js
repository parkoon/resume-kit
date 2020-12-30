const rmSync = require('rimraf').sync
const shelljs = require('shelljs')
const path = require('path')

function removeAdmin() {
  rmSync(path.join(__dirname, 'out/admin'))
  rmSync(path.join(__dirname, 'out/admin.html'))
}
function touchNojekyll() {
  shelljs.touch(path.join(__dirname, 'out/.nojekyll'))
  console.log('create nojekyll file successfully')
}

removeAdmin()
touchNojekyll()
