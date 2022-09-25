// fs.appendFile() -- Update File

//Adicionando conteúdo 'This is my text.' no fim do arquivo mynewfile1.txt


var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {
      if (err) throw err;
      console.log('Updated!');
});