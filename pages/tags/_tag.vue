<template>
  <div>
    <!-- Tag page header -->
    <header class="tag-page header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">John Doe</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>#{{ tag }}</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>All articles tagged #{{ tag }} ({{ posts.length }})</h2>
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
import {getBlogPosts} from '~plugins/contentful-cda-client.js'
import Navigation from '~components/navigation.vue'
import ArticlePreview from '~components/article-preview.vue'

export default {
  asyncData ({ params }) {
    return getBlogPosts({
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
