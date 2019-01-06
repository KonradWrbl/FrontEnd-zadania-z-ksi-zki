var http = require('http');
var fs = require('fs');
var wyodrębnienie = require('./wyodrębnienie');

var obsłużBłąd = function(błąd, odpowiedź) {
  odpowiedź.writeHead(404);
  odpowiedź.end();
};

var server = http.createServer(function(zapytanie, odpowiedź) {
  console.log('Odpowiedź na zapytanie.');
  var ścieżkaPliku = wyodrębnienie(zapytanie.url);
  fs.readFile(ścieżkaPliku, function(błąd, dane) {
    if (błąd) {
      obsłużBłąd(błąd, odpowiedź);
      return;
    } else {
      odpowiedź.end(dane);
    }
  });
});
server.listen(3000);
