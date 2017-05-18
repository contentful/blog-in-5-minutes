# blog-in-5-min

> A static blog or (dynamic blog) based on Contentful

![Preview of the Blog](./docs/images/home.png "Preview of the Blog")

This projects can be used as a base to get you started with Contentful. It includes the following features:

- static site generation
- dynamic server side rendering
- deploy to [now](https://zeit.co/now)
- responsive images via [Images API](https://www.contentful.com/developers/docs/references/images-api/)
- tags for blog posts

## Getting started

To really get you started from end to end please check out [the getting started guide](./docs/GETTING-STARTED.md).

## Technical stack

This project is based on [nuxt.js](https://nuxtjs.org/).

### Why nuxt.js?

nuxt.js is based on [Vue.js](https://vuejs.org/). Vue is a fairly new JS framework that provides excellent documentation and is a pleasure to work with. nuxt.js sits on top of Vue and was choosen because of two main feature:

- dynamic rendering on the server running in Node.js
- static file generation

These two features make it very flexible and extensible to make your blog run anywhere.

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### What is used for styling?

To keep the work effort low (and there a million ways to write CSS) the [Foundation CSS framework is included](https://github.com/stefanjudis/contentful-blog-in-5-min/blob/master/nuxt.config.js#L17). There is no further thinking behind this decision except to make this example "kind of" pretty. :)
