// O fs.writeFile() é um método que substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado.

// EX: crie um novo arquivo usando o método writeFile()


var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
});