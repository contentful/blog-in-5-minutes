<template>
  <div>
    <!-- Article header -->
    <header class="article header">
      <div class="picture">
        <img
          :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
          size="100vw"
          :alt="post.fields.heroImage.fields.description"
        >
      </div>
      <div class="foreground">
        <div class="page-bar wrapper">
          <h1>John Doe</h1>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
          <h2>{{ post.fields.title }}</h2>
        </div>
      </div>
    </header>

    <main class="row column">
      <vue-markdown>{{post.fields.body}}</vue-markdown>
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

.article.header {
  height: auto;
  /*height: 320px;*/
}

.picture {
  position: relative;
  z-index: 2;
  /*position: absolute;
  z-index: 2;
  top: 0; bottom: 0;
  left: 0; right: 0;
  width: 100%;
  height: 100%;*/
}

.picture img {
  display: block;
  width: 100%;
}

.foreground {
  overflow: hidden;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 2em 0;
}

</style>
