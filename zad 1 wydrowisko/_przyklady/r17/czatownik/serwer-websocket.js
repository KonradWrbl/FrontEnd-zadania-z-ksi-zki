var WebSocket = require('ws');
var SerwerWebSocket = WebSocket.Server;
var port = 3001;
var ws = new SerwerWebSocket({
  port: port
});
var komunikaty = [];

console.log('Serwer WebSocket uruchomiony.');

ws.on('connection', function(gniazdo) {
  console.log('Nawiązane połączenie z klientem.');

  komunikaty.forEach(function(kom) {
    gniazdo.send(kom);
  });

  gniazdo.on('message', function(dane) {
    console.log('Odebrany komunikat: ' + dane);
    komunikaty.push(dane);
    ws.clients.forEach(function(gniazdoKlienta) {
      gniazdoKlienta.send(dane)
    });
  });
});
