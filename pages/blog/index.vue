<template>
  <div>
    <Navigation></Navigation>
    <div class="callout large">
      <div class="row column text-center">
        <h1>Blog</h1>
      </div>
    </div>

    <div class="row">
      <div class="small-12 columns" v-for="post in posts">
        <div class="post">
          <img class="thumbnail"
            :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
            :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=131&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=375&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1000&fit=fill 2000w`"
            size="(min-width: 1024px) 1200px, 100vw"
            :alt="post.fields.heroImage.fields.description"
          >
          <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
          <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link></h4>
          <p>{{ post.fields.description }}</p>

          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" :aria-label="post.fields.title">Read more</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {cdaClient} from '../../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'

export default {
  asyncData ({ params }) {
    return cdaClient.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    Navigation
  }
}
</script>

<style>
.post {
  padding: 2em 0;
}
</style>
