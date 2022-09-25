// O fs.unlink() é um método que exclui o arquivo especificado:

// EX: excluir arquivo mynewfile2.txt


var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
      if (err) throw err;
      console.log('File deleted!');
});