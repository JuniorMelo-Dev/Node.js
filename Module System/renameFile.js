// O fs.rename() é um método que renomeia o arquivo especificado.

// EX: renomeie mynewfile1.txt para myrenamedfile.txt

var fs = require('fs')

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
      if (err) throw err;
      console.log('File Renamed!');
});