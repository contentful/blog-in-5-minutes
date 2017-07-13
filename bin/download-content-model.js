const path = require('path')

const clone = require('git-clone')
const rimraf = require('rimraf')

const DATA_DIR = path.resolve(__dirname, '..', 'data')

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
