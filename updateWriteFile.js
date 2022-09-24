// fs.writeFile() -- Update File

//Substituindo o conteúdo do arquivo mynewfile3.txt, para 'This is my text'

var fs = require('fs');


fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
      if (err) throw err;
      console.log('Replaced!');
});