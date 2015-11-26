module.exports = function createIndexProcessor() {
  return {
    $runAfter: ['adding-extra-docs'],
    $runBefore:['extra-docs-added'],
    $process: function(docs) {
      var indexDoc = {
       // id: 'index-doc',
        docType: 'index',
        path: '/',
        outputPath: 'index.html',
        childDocs: []
      };

      docs.forEach(function(doc) {
        if (doc.docType == 'module') indexDoc.childDocs.push(doc);
      });

      indexDoc.childDocs.sort(function(doc) { return doc.name; });
      
      docs.push(indexDoc);
      return docs;
    }
  };
};
