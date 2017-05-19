<template>
  <div>
    <!-- Tag page header -->
    <header class="tag header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <h1>John Doe</h1>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          #{{ tag }}
        </div>
      </div>
    </header>

    <section class="items">
      <div class="items-bar wrapper">
        <h2>All articles ({{ posts.length }}) #{{ tag }}</h2>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {cdaClient} from '../../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'
import ArticlePreview from '~components/article-preview.vue'

export default {
  asyncData ({ params }) {
    return cdaClient.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  components: {
    ArticlePreview,
    Navigation
  }
}
</script>

<style>
</style>
