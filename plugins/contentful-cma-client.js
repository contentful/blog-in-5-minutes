import ctfConfig from '../.contentful.json'
import {createClient} from 'contentful-management'

const cmaClient = createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

export function getBlogPostContentType () {
  cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
    .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
}
