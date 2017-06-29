import ctfConfig from '../.contentful.json'
import {createClient} from 'contentful'

const cdaClient = createClient({
  space: ctfConfig.CTF_SPACE_ID,
  accessToken: ctfConfig.CTF_CDA_ACCESS_TOKEN
})

export function getBlogPosts (options) {
  options = Object.assign({}, {
    'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
  }, options)

  return cdaClient.getEntries(options)
    .then(entries => entries.items)
}

export function getMainPerson () {
  return cdaClient.getEntries({
    'sys.id': ctfConfig.CTF_PERSON_ID
  }).then(entries => entries.items[0])
}
