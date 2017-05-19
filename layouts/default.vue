<template>
  <div class="container">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

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
