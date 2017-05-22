<template>

  <!-- Greeting section -->
  <section class="greeting">
    <div class="message wrapper">
      <p>
        <strong>Way to go!</strong> You just set up a Contentful account and a custom app. Now knock yourself out in the <a href="https://app.contentful.com/" target="_blank">Web App</a> or head over to the <a href="http://contentful.com/developers/docs" target="_blank">Documentation</a> to learn more about building with Contentful. Delete line <code>3</code> from <code>layouts/default.vue</code> to remove this message.
      </p>
      <button>Try the Web App</button>
    </div>
  </section>

</template>

<script>
export default {
}
</script>

<style>

  .greeting {
    background: #fff;
    border: 1px solid #489CF1;
  }

  .message {
    overflow: hidden;
    padding: 3em 0;
  }

  .message p {
    margin-bottom: 2em;
  }

  @media all and (min-width: 900px) {
    .message p {
      float: left;
      max-width: 70%;
      margin-bottom: 0;
    }
  }


  .message button {
    font-size: inherit;
    background: #489CF1;
    border: 0;
    border-radius: 3px;
    color: #fff;
    padding: 1em 2em;
  }

  @media all and (min-width: 900px) {
    .message button {
      float: right;
      max-width: 20%;
    }
  }

</style>
