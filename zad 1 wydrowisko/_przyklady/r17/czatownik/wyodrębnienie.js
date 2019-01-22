var path = require('path');

var wyodrębnijŚcieżkę = function(url) {
  var ścieżkaPliku;
  var nazwaPliku = 'index.html';
  if (url.length > 1) {
    nazwaPliku = url.substring(1);
  }
  console.log('Nazwa pliku: ' + nazwaPliku);
  ścieżkaPliku = path.resolve(__dirname, 'aplikacja', nazwaPliku);
  return ścieżkaPliku;
};

module.exports = wyodrębnijŚcieżkę;
