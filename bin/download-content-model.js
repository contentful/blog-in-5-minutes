const clone = require('git-clone')
const path = require('path')

console.log('Cloning content model');
clone(
  'git@github.com:contentful/content-models.git',
  path.resolve(__dirname, '..', 'data'),
  (error) => {
    if (error) {
      console.log('An error happend during cloning')
      console.log(error)
    }

    console.log('Cloned data to ./data')
  }
)
