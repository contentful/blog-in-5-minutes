# What's next?

A blog on your local machine is nice to have, but a blog on the internet is even better.

## Deploy using now.sh

Change directory to where you installed your application and run:

```sh 
$ npm run deploy:now
```

## Deploy using Heroku

Make sure you have the [Heroku CLI tool installed](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

If you're not already signed in run `$ heroku login` and enter your credentials.

Change directory to where you installed your application and run `$ git init` to initialize a new repository.

Run `$ heroku create` to create a new app on Heroku.

Set the following configuration variables for your Heroku app `$ heroku config:set NPM_CONFIG_PRODUCTION=false && heroku config:set HOST=0.0.0.0 && heroku config:set NODE_ENV=production`

Now simply run:

```sh 
$ npm run deploy:heroku
```