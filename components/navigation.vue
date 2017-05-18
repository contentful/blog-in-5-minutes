<template>
  <nav role="navigation" class="top-nav">
    <ul class="menu">
      <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
        <nuxt-link :to=" { name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {}
}
</script>
