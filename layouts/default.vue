<template>
  <div class="container">
    <Greeting></Greeting>
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import Greeting from '~components/greeting.vue'

  export default {
    components: {
      Greeting
    }
  }
</script>

<style>
  @font-face {
    font-family: "Avenir";
    font-weight: 400;
    font-style: normal;
    src: url("/avenir-400.woff2") format("woff2");
    font-display: swap;
  }

  body {
    background: #E1E7EA;
    max-width: 1280px;
    margin: 0 auto;
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 1.65;
  }

  .wrapper {
    padding: 2em 0;
    max-width: 80%;
    margin: 0 auto;
  }

  .header {
    overflow: hidden;
    position: relative;
    height: 610px;
    background: #1D3242;
    color: #ffffff;
  }

  h1,
  h2,
  h3 {
    font-size: 2em;
  }

  /* Items section */
  .items {
    background: #ffffff;
  }

  .items-list {
    overflow: hidden;
  }

  .item {
    padding: 1em 3em 1em 0;
  }

  @media all and (min-width: 600px) {
    .item {
      float: left;
      width: 50%;
    }
  }

  @media all and (min-width: 900px) {
    .item {
      width: 33.333%;
    }
  }

  /* Shared */

  .tiny {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    color: #A0A0A0;
  }

  *[class*="-bar"] {
    border-bottom: 1px solid #EBEBEB;
  }

</style>
