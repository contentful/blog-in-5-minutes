const fs = require('fs')
const path = require('path')

const clone = require('git-clone')
const rimraf = require('rimraf')

const REPO_ROOT = path.resolve(__dirname, '..')
const DATA_DIR = path.resolve(REPO_ROOT, 'data')

console.log('Checking permissions to write files to the disk')

fs.access(REPO_ROOT, fs.constants.W_OK, (err) => {
  if (err) {
    console.error(`Script is unable to write to project directory. Please check your users file permissions for ${REPO_ROOT}`)
    process.exit(1)
  }

  console.log('Cloning content model')

  rimraf(DATA_DIR, () => {
    clone(
      'git@github.com:contentful/content-models.git',
      DATA_DIR,
      (error) => {
        if (error) {
          console.log('An error happend during cloning')
          console.log(error)
          process.exit(1)
        }

        console.log('Cloned data to ./data')
      }
    )
  })
})
