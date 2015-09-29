var Package = require('dgeni').Package;

var jsdocPackage = require('dgeni-packages/jsdoc');
var nunjucksPackage = require('dgeni-packages/nunjucks');
//var examplePackage = require('dgeni-packages/examples');
var gitPackage = require('dgeni-packages/git');

var path = require('canonical-path');


module.exports = new Package('fit-docs-package', [
  jsdocPackage,
  nunjucksPackage,
  //examplePackage,
  gitPackage])


.config(function(readFilesProcessor, writeFilesProcessor) {
  readFilesProcessor.basePath = path.resolve(__dirname,'../public');
  readFilesProcessor.sourceFiles = [
    { include: '**/*.js', exclude: 'bower_components/**' }
  ];
  writeFilesProcessor.outputFolder = 'dgeni-docs';
})

.config(function(parseTagsProcessor) {
  parseTagsProcessor.tagDefinitions.push(require('./tagdefs/ngdoc.js'));
  parseTagsProcessor.tagDefinitions.push(require('./tagdefs/methodOf.js'));
  parseTagsProcessor.tagDefinitions.push(require('./tagdefs/memberOf.js'));
  parseTagsProcessor.tagDefinitions.push(require('./tagdefs/example.js'));
})

.config(function(templateFinder, templateEngine, getInjectables) {

  templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));

  templateEngine.config.tags = {
    variableStart: '{$',
    variableEnd: '$}'
  };

  templateFinder.templatePatterns = [
    '${ doc.template }',
    '${ doc.id }.${ doc.docType }.template.html',  // 'FitFactory.module.template.html'
    '${ doc.id }.template.html',                   // 'FitFactory.template.html'
    '${ doc.docType }.template.html',              // 'module.template.html'
    'base.template.html'
  ].concat(templateEngine.templatePatterns);

})

.config(function(inlineTagProcessor) {
  inlineTagProcessor.$enabled = false;
});




// .config(function(generateExamplesProcessor, generateProtractorTestsProcessor) {
//   generateExamplesProcessor.deployments = [{ name: 'default' }];
//   generateProtractorTestsProcessor.deployments = [{ name: 'default' }];
// });