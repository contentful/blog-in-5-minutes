<template>
  <article>
    <img class="thumbnail"
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
    >
    <time>{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
    <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link></h4>
    <p>{{ post.fields.description }}</p>

    <div class="tags">
      <nuxt-link
        v-for="tag in post.fields.tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag: tag }}" class="tag">{{ tag }}</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post'],
  components: {}
}
</script>
