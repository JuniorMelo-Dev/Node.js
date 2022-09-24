// O fs.readFile() é um método udado para ler arquivos no computador .

//EX: criando o arquivo demoReadFile1.html, conseguimos ler e retornar esse conteúdo por esse método

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
      fs.readFile('demoReadFile1.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
      });
}).listen(8080);