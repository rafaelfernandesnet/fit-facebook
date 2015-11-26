var Package = require('dgeni').Package;

var jsdocPackage = require('dgeni-packages/jsdoc');
var nunjucksPackage = require('dgeni-packages/nunjucks');
var ngdocPackage = require('dgeni-packages/ngdoc');
var linksPackage = require('dgeni-packages/links');
var gitPackage = require('dgeni-packages/git');

var path = require('canonical-path');
var url = require('url');

module.exports = new Package('fit-docs-package', [
  jsdocPackage,
  nunjucksPackage,
  ngdocPackage,
  gitPackage])

.processor(require('./processors/create_index_processor'))
.processor(require('./processors/modulePackageNameProcessor'))
.processor(require('dgeni-packages/ngdoc/processors/memberDocs'))

.config(function(debugDumpProcessor) {
  debugDumpProcessor.$enabled = true;
})

.config(function(readFilesProcessor, writeFilesProcessor) {
  readFilesProcessor.basePath = path.resolve(__dirname,'../public');
  readFilesProcessor.sourceFiles = [
    { include: 'modules/*/*.js', exclude: 'bower_components/**' }
  ];
  writeFilesProcessor.outputFolder = 'dgeni-docs';
})

.config(function(parseTagsProcessor) {
  // parseTagsProcessor.tagDefinitions.push(require('./tagdefs/ngdoc.js'));
  // parseTagsProcessor.tagDefinitions.push(require('./tagdefs/methodOf.js'));
  // parseTagsProcessor.tagDefinitions.push(require('./tagdefs/memberOf.js'));
  parseTagsProcessor.tagDefinitions.push(require('./tagdefs/example.js'));
})

.config(function(readFilesProcessor, writeFilesProcessor, renderDocsProcessor, templateFinder, templateEngine, getInjectables) {

  var outputPath = path.resolve(readFilesProcessor.basePath, writeFilesProcessor.outputFolder);
  console.log(outputPath);
  renderDocsProcessor.helpers.getRelativeBasePath = function(doc) {
    console.log(doc.path, doc.outputPath, url.resolve(doc.outputPath, outputPath));
    return url.resolve(doc.outputPath, outputPath); // doc.path='/a/b/c' -> '../../..'
  };

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

.config(function(inlineTagProcessor, getLinkInfo) {
  // inlineTagProcessor.$enabled = false;
  getLinkInfo.relativeLinks = true;
})

.config(function(computePathsProcessor) {

  computePathsProcessor.pathTemplates = [];

  computePathsProcessor.pathTemplates.push({
    docTypes: ['js'],
    pathTemplate: '${id}.html',
    outputPathTemplate: '${path}'
  });

  computePathsProcessor.pathTemplates.push({
    docTypes: ['module'],
    pathTemplate: '${area}/${name}/index.html',
    outputPathTemplate: '${path}'
  });

  computePathsProcessor.pathTemplates.push({
    docTypes:['componentGroup'],
    pathTemplate: '${area}/${moduleName}/${groupType}/index.html',
    outputPathTemplate: '${path}'
  });

  computePathsProcessor.pathTemplates.push({
    docTypes: ['controller', 'directive', 'service'],
    pathTemplate: '${area}/${module}/${docType}/${name}.html',
    outputPathTemplate: '${path}'
  });
})

.config(function(computeIdsProcessor, getAliases) {
  computeIdsProcessor.idTemplates.push({
    docTypes: ['index'],
    idTemplate: 'index-doc',
    getAliases: function(doc) { return [doc.id]; }
  });

  computeIdsProcessor.idTemplates.push({
    docTypes: ['controller'],
    idTemplate: 'module:${module}.${docType}:${name}',
    getAliases: getAliases
  });
})

// .config(function(generateExamplesProcessor, generateProtractorTestsProcessor) {
//   generateExamplesProcessor.deployments = [{ name: 'default' }];
//   generateProtractorTestsProcessor.deployments = [{ name: 'default' }];
// });
