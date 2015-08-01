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
