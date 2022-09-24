// Crie um arquivo Node.js que converterá a saída "Hello World!" em letras maiúsculas:

var http =require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(uc.upperCase("Hello World!"));
      res.end();
}).listen(8080);