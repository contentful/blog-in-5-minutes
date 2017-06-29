const cmaContentful = require('contentful-management')

let ctfConfig

try {
  ctfConfig = require('../.contentful')
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    if (
      !process.env.CTF_SPACE_ID ||
      !process.env.CTF_BLOG_POST_TYPE_ID ||
      !process.env.CTF_CMA_ACCESS_TOKEN
    ) {
      throw new Error(
        'Please provide needed Contentful configs:\n' +
        'There are two way to do so:\n' +
        '- define a .contentful.json file (similar to .contentful.sample.json) in the root of this directory\n' +
        '- define environment variables CTF_CMA_ACCESS_TOKEN'
      )
    }

    ctfConfig = {
      SPACE_ID: process.env.SPACE_ID,
      CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
      CTF_CMA_ACCESS_TOKEN: process.env.CTF_CMA_ACCESS_TOKEN
    }
  } else {
    throw error
  }
}

const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

function getBlogPostContentType () {
  cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
    .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
}

module.exports = {
  getBlogPostContentType
}
