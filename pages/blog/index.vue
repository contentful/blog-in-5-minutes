<template>
  <div>
    <!-- Blog header -->
    <header class="blog header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">John Doe</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>Blog</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>All articles ({{ posts.length }})</h2>
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
      order: '-sys.createdAt'
    }).then(posts => {
      return {
        posts
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
