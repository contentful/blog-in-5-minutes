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

<style>

  h1 {
    width: 50%;
    display: inline-block;
  }

  .top-nav {
    width: 50%;
    display: inline-block;
    text-align: right;
  }

  .menu {
    display: inline-block;
  }

  .menu li {
    display: inline-block;
    margin-left: 1em;
  }

  .menu a:link,
  .menu a:visited {
    color: #ffffff;
    text-decoration: none;
  }

</style>
