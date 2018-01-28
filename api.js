var jsonServer = require('json-server');

var server = jsonServer.create();

server.use(jsonServer.defaults());

var router = jsonServer.router('db.json');
server.use(router);

var port = 4000;
console.log('Listening at ' + port);
server.listen(port);
