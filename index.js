
var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
});

client.connect('ws://' + process.argv[2] + '/json/', null);
