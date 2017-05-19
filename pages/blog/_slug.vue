<template>
  <div>
    <!-- Article header -->
    <header class="article header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <h1>John Doe</h1>
          <Navigation></Navigation>
        </div>
      </div>
      <div class="picture">
        <img
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
          size="100vw"
          :alt="post.fields.heroImage.fields.description"
        >
      </div>
    </header>

    <section class="body-container">
      <main class="wrapper">
        <div class="copy">
          <time class="tiny">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
          <h2 class="headline">{{ post.fields.title }}</h2>
          <vue-markdown>{{post.fields.body}}</vue-markdown>
        </div>
      </main>
    </section>

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

.article.header {
  height: auto;
}

.foreground .page-bar {
  border-bottom: 0;
}

.picture {
}

.picture img {
  display: block;
  width: 100%;
}

.copy {
  padding-top: 5em;
  padding-bottom: 5em;
     -webkit-columns: 2 280px;
        -moz-columns: 2 280px;
             columns: 2 280px;
  -webkit-column-gap: 5vw;
     -moz-column-gap: 5vw;
          column-gap: 5vw;
}

.headline {
  padding-bottom: 2em;
}

</style>
