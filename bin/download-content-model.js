const fs = require('fs')
const path = require('path')

const clone = require('git-clone')
const ora = require('ora')
const rimraf = require('rimraf')

const REPO_ROOT = path.resolve(__dirname, '..')
const DATA_DIR = path.resolve(REPO_ROOT, 'data')

const permissions = ora('Checking permissions to write files to the disk').start()

fs.access(REPO_ROOT, fs.constants.W_OK, (err) => {
  if (err) {
    permissions.fail(`Script is unable to write to project directory. Please check your users file permissions for ${REPO_ROOT}`)
    process.exit(1)
  }

  permissions.succeed()

  const cloning = ora('Cloning content model').start()

  rimraf(DATA_DIR, (error) => {
    if (error) {
      cloning.fail('An error happend while removing existing content model')
      process.exit(1)
    }
    clone(
      'git@github.com:contentful/content-models.git',
      DATA_DIR,
      (error) => {
        if (error) {
          cloning.fail('An error happend during cloning')
          console.log(error)
          process.exit(1)
        }

        cloning.succeed('Cloned data to ./data\n')
      }
    )
  })
})
