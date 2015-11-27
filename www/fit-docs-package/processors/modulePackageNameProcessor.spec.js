var fitDocsPackage = require('..');
var Dgeni = require('dgeni');

describe('modulePackageNameProcessor', function(){
	var processor;

  beforeEach(function() {
    var dgeni = new Dgeni([fitDocsPackage]);
    var injector = dgeni.configureInjector();

    processor = injector.get('modulePackageNameProcessor');
  });


	it('should write the packagePath to the doc', function(){
		var docs = [
			{ docType: 'module', name: 'ff.newsModule'}
		];
		processor.$process(docs);
		expect(docs[0].packagePath).toEqual('./modules/ff-news/ff.news.app.js');
	});

});