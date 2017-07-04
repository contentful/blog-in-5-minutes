<template>

  <!-- Greeting section -->
  <section class="greeting">
    <div class="message wrapper">
      <p>
        There you go! You just set up a Contentful account and a custom app. Now go ahead and <a href="https://app.contentful.com/" target="_blank">try the Web App</a> or head over to the <a href="http://contentful.com/developers/docs" target="_blank">Documentation</a> to learn more about building with Contentful. If you want to remove this message, delete line <code>3</code> in <code>layouts/default.vue</code>.
      </p>
      <a href="https://app.contentful.com/" target="_blank" class="cta">Try the Web App</a>
    </div>
  </section>
</template>

<style>
  .greeting {
    background: #fff;
    border: 1px solid #489CF1;
    margin: 2em 0;
  }

  .message {
    overflow: hidden;
    padding: 3em 0;
  }

  .message p {
    margin-bottom: 2em;
  }

  code {
    border-radius: 3px;
    background: #E1E7EA;
    padding: 3px 5px;
  }

  @media all and (min-width: 900px) {
    .message p {
      float: left;
      max-width: 70%;
      margin-bottom: 0;
    }
  }


  .message .cta {
    font-size: inherit;
    background: #489CF1;
    border: 0;
    border-radius: 3px;
    color: #fff;
    padding: 1em 2em;
    text-decoration: none;
  }

  @media all and (min-width: 900px) {
    .message .cta {
      float: right;
      max-width: 20%;
    }
  }
</style>
