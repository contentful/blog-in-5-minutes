<template>

  <!-- Greeting section -->
  <section class="greeting">
    <div class="top-bar wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" class="logo">
        <g fill="none" fill-rule="nonzero">
          <path fill="#FAE501" d="M8.773 19.512C7.236 18.113 6.33 16.188 6.33 14c0-2.188.906-4.113 2.353-5.512 1.266-1.225 1.266-3.15 0-4.375-1.266-1.226-3.256-1.226-4.522 0C1.63 6.65 0 10.15 0 14c0 3.85 1.628 7.35 4.25 9.887 1.267 1.226 3.257 1.226 4.523 0 1.176-1.224 1.176-3.15 0-4.375z"/>
          <path fill="#4FB5E1" d="M8.773 8.488C10.22 7 12.21 6.125 14.47 6.125c2.262 0 4.252.875 5.7 2.275 1.266 1.225 3.255 1.225 4.522 0 1.266-1.225 1.266-3.15 0-4.375C22.07 1.575 18.452 0 14.472 0 10.49 0 6.873 1.575 4.25 4.112c-1.267 1.226-1.267 3.15 0 4.376 1.265 1.137 3.255 1.137 4.52 0z"/>
          <path fill="#F05751" d="M20.17 19.512c-1.448 1.488-3.438 2.363-5.7 2.363-2.26 0-4.25-.875-5.697-2.275-1.266-1.225-3.256-1.225-4.522 0-1.265 1.225-1.265 3.15 0 4.375C6.875 26.425 10.493 28 14.47 28c3.98 0 7.6-1.575 10.222-4.113 1.266-1.224 1.266-3.15 0-4.375-1.267-1.137-3.256-1.137-4.523 0z"/>
          <ellipse cx="6.512" cy="6.3" fill="#0681B6" rx="3.166" ry="3.063"/>
          <ellipse cx="6.512" cy="21.7" fill="#CD4739" rx="3.166" ry="3.063"/>
        </g>
      </svg>
      <small class="tiny">Custom app in under 5 minutes</small>
    </div>
    <div class="notice wrapper">
      <p>Way to go! You just set up a Contentful account and now you’re viewing all your content in a custom app. That was quick, wasn’t it? Now knock yourself out in the <a href="https://app.contentful.com/" target="_blank">Web App</a> or head over to the <a href="http://contentful.com/developers/docs" target="_blank">Documentation</a> to learn more about building with Contentful.</p>
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
    background: #F7F9FA;
  }

  .greeting .top-bar {
    padding: 2em 10%;
    max-width: 100%;
    line-height: 0;
  }

  .greeting .logo {
    width: 25px;
    height: 25px;
  }

  .greeting small {
    display: block;
    margin: -10px 0 10px 35px;
  }

  .notice {
    overflow: hidden;
  }

  .notice p {
    max-width: 800px;
  }

  .notice button {
    float: right;
  }
  
</style>
