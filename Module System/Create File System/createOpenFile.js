// O fs.open() é um método que recebe um "flag" (bandeira) como sendo argumento, se o sinalizador for "w" para "escrever", o arquivo especificado será aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado.

// EX: crie um arquivo vazio usando o método open()

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
      if (err) throw err;
      console.log('Saved!');
});