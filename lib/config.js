function getValidConfig (configEnv, keys) {
  let {config, missingKeys} = keys.reduce((acc, key) => {
    if (!configEnv[key]) {
      acc.missingKeys.push(key)
    } else {
      acc.config[key] = configEnv[key]
    }

    return acc
  }, {config: {}, missingKeys: []})

  if (missingKeys.length) {
    throw new Error(
      'Please provide needed Contentful configs:\n' +
      `\nMissing values: ${missingKeys.join(', ')}\n\n` +
      'There are two way to do so:\n' +
      '- define a .contentful.json file (similar to .contentful.sample.json) in the root of this directory\n' +
      `- define all environment variables ${keys.join(', ')}`
    )
  }

  return config
}

module.exports = {
  getConfigForKeys (keys) {
    let configEnv

    try {
      configEnv = require('../.contentful.json')
    } catch (error) {
      if (error.code === 'MODULE_NOT_FOUND') {
        configEnv = process.env

        return getValidConfig(configEnv, keys)
      } else {
        throw error
      }
    }

    return getValidConfig(configEnv, keys)
  }
}
