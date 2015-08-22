# fit-facebook

` Display an example of a small social

## Install

1. Install nodeJS, npm, bower and gulp and node-foreman
2. Run `npm install`
3. Run `cd www/`
4. Run `npm install`
5. Run `bower install`
6. Install https://toolbelt.heroku.com/
7. npm install -g gulp
7. npm install -g karma

## Develop

1. Run `./development.sh`

## Preview

1. Run `./production.sh`
	
## How to start karma

1. Open nodeJs prompt
2. Run `cd www`
3. Run `karma start`

## How to run protractor

### Open webdriver

1. Open nodeJs prompt
2. Run `cd www\test\e2e\`
3. Run `webdriver-manager start`

### Run protractor

1. Open nodeJs prompt
2. Run `cd www\test\e2e\`
3. Run `protractor conf`

### Create module

1. Open nodeJs prompt
2. Run `cd www`
3. Type `node ff moduleName`

- `this will generate the folder with controller, service, route and app for that module.`
- `Remember to go app.js, require the module in the file and add as a dependency.`

### To link to an new application:
1. create a file named facebook.secret.ids.js with the content:
```
module.exports = {
    clientId:'????',
    clientSecret:'?????'
}
```
2. update the facebook url in the www/public/modules/ff-core/ff.core.controller.js with the right client_id and url.
```
  vm.facebookUrl = 'https://www.facebook.com/dialog/oauth?client_id=155870204744672&redirect_uri=http://localhost:8888/&expiry=86400&scope=email,user_posts,publish_actions,user_friends,user_status,user_games_activity,user_actions.fitness'
```

### To generate the documentation:
1. Run `cd www\`
2. Run `gulp docs:generate`
- The documentation should be accessible at www/docs/index.html

# You should be ready!

### I hope you have fun with this prototype. Please feel free to contact me if you have any questions.

# To install protractor
1. npm install -g protractor
2. Install Java SDK. (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

