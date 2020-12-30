const path = require('path');

//-- Base file name --//
console.log(path.basename(__filename));

//-- Directory Name --//
console.log(path.dirname(__filename));

//-- File Extension --//
console.log(path.extname(__filename));

//-- Create path OBJECT --//
console.log(path.parse(__filename));

//-- Concatenate paths --//
// woks well with delimiters, this method puts the correct path syntax automatically
console.log(path.join(__dirname, 'test', 'hello.html'))