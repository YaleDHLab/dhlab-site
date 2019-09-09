var lunr = require('lunr');
var documents = require('./documents.json');
var fs = require('fs');
var idToMetadata = {};

function writeJson(obj, filename) {
  fs.writeFile('_site/assets/js/search/' + filename, obj, (err) => {
    if(err) return console.log(err);
    console.log('Saved ' + filename);
  }); 
}

var idx = lunr(function() {
  this.ref('id')
  this.field('content')
  this.field('title')

  documents.forEach(function(doc, idx) {
    doc.id = idx;
    idToMetadata[idx] = {
      url: doc.url,
      title: doc.title,
      teaser: doc.teaser,
      seconds: doc.seconds
    }

    this.add(doc)
  }, this)
})

writeJson(JSON.stringify(idToMetadata), 'id-to-metadata.json');
writeJson(JSON.stringify(idx), 'index.json');