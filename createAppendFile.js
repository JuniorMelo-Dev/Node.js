// O fs.appendFile() é um método que anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado:

//EX: crie um novo arquivo usando o método appendFile()

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content', function (err) {
      if (err) throw err;
      console.log('Saved!');
});