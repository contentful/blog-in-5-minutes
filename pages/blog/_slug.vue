<template>
  <div>
    <Navigation></Navigation>
    <div class="callout large">
      <div class="row column text-center">
        <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
        <h1>{{ post.fields.title }}</h1>
      </div>
    </div>
    <img class="hero"
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
      size="100vw"
      :alt="post.fields.heroImage.fields.description"
    >

    <main class="row column">
      <div>
        <vue-markdown>{{post.fields.body}}</vue-markdown>
      </div>
    </main>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {cdaClient} from '../../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'

export default {
  asyncData ({ params }) {
    return cdaClient.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    Navigation,
    VueMarkdown
  }
}
</script>

<style>
.hero {
  margin: -1em 0 3em;
}
</style>
