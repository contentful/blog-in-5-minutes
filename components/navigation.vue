<template>
  <nav role="navigation" class="top-bar">
    <div class="top-bar-left">
      <ul class="menu">
        <li class="menu-text">Contentful Blog in 5 min</li>
        <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
          <nuxt-link :to=" { name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  components: {}
}
</script>
