'use strict'

const fetch = require('node-fetch')
const zlib = require('zlib')
const tar = require('tar')
const ctfImport = require('contentful-import')
const argv = require('yargs').argv
const log = require('npmlog')

if (!argv.spaceId || !argv.managementToken) {
  throw new Error(`
    Please define your space id and your content management API access token

    E.g.
      $ npm run import-data -- --space-id 123456 --management-token abcdef
  `)
}

log.info('Downloading blog content model')
fetch('https://api.github.com/repos/contentful/content-models/releases/latest')
  .then(res => res.json())
  .then(res => {
    return fetch(res.tarball_url)
  })
  .then(res => {
    return new Promise((resolve, reject) => {
      log.info('Unpacking blog content model')
      res.body
        .pipe(zlib.Unzip())
        .pipe(new tar.Unpack({
          cwd: '/data',
          strip: 1
        }))
        .on('error', reject)
        .on('close', resolve)
    })
  })
  .then(_ => {
    log.info('Importing blog content model')
    return ctfImport(
      {
        content: require('../data/blog/contentful-export.json'),
        spaceId: argv.spaceId,
        managementToken: argv.managementToken
      }
    )
  })
  .then(_ => {
    log.info(`Your space is now ready to use`)
  })
  .catch(console.log)
