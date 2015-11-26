module.exports = function modulePackageNameProcessor(log, createDocMessage) {
	return {
		$runAfter: ['moduleDocsProcessor'],
		$runBefore:['rendering-docs'],
		$process: function(docs) {
			docs.forEach(function(doc) {
				if (doc.docType === 'module') {
					var moduleName = doc.name.replace('Module', '').replace('ff.', '');
					// news
					log.info(createDocMessage('moduleName created as ' + moduleName, doc));
					// Add the folder name
					doc.packagePath = './modules/ff-' + moduleName + '/ff.' + moduleName + '.app.js';
					// ./modules/ff-news/ff.news.app.js
				}
			});
		}
	};
};