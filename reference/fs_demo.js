const fs = require('fs');
const path = require('path');

////// USING THE FS MODULE ///////

//-- create a folder (test) in current directory (@ 30 minutes)--//
// by default, they are asynchronous (takes in a callback)
// but there is a synchronous method also.mkdirSync
// most cases you will use the synchronous method.

// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {  // note the function(err) here can be replaced with an arrow function.

/*
fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
    if(err) throw err;
    console.log('Folder created...');
});
*/

//-- Create and WRITE to file --//

/*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err=> {
    if(err) throw err;
    console.log('File written to...');
});

*/
//-- Need to use the append function inside the 'callback' to ADD to a file. Otherwise it get over-written --//

/*

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err=> {
    if(err) throw err;
    console.log('File written to...');

    // File append
    fs.appendFile(
        path.join(__dirname, '/test', 'hello.txt'), 
        '  I love Node.js', 
        err=> {
            if(err) throw err;
            console.log('File written to...');
    });

});

*/

////-- Read a file --////
/*
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=> {
    if(err) throw err;
    console.log(data);
});

*/

////-- Rename a file --////

/*
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test',
    'helloworld.txt'), err=> {
    if(err) throw err;
    console.log('File renamed...');
});
*/