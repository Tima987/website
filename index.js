/* - Express makes things a lot easier. But its good to understand this way
 * - Using all core node modules
 * - nodemon keeps us from having to restart the server everytime a change is made.
 *   we dont install globally though, so we need to make a script in 'package.json'
 * - To run the nodemon server make script changes in package.json and run <npm run nodemon>
 * - Make sure to check the Response Headers and ensure they are serving up the correct type
 */

//-- Note this is not efficienct, because we would need to include all files --//
const http = require ('http');
const path = require ('path');
const fs = require ('fs');
const { CONNREFUSED } = require('dns');
const server = http.createServer( (req, res) => {
    //-- want to load a file
    // //console.log(req.url);
    // if(req.url === '/') {           // or we could do === '/about' and load teh about.html
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'})  // want this in a site. writes to response header.
    //         res.end(content);       //serve the html page
    //     } )
    // }

    // //-- if using a rest API --//
    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'John Doe', age: 30}
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    //-- Build a file path, and set to request url --//
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log(filePath);
    // res.end();

    //-- Get the extension of a file --//
    let extname = path.extname(filePath)

    //-- Initial content type --//
    let contentType = 'text/html';

    //-- Check the ext and set content type --//
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    //-- Read a file --//
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                //-- Page not found --//
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
                    res.writeHead(200, { 'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                } )
            } else {
                //-- Some server error --//
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        }else {
            //-- Success --//
            res.writeHead(200, { 'Content-Type':contentType })
            res.end(content, 'utf8');       // actually sends the content of the file
        }
    });
} );



const PORT = process.env.PORT || 5000;  // when we deploy, wont always run at 5000, will run on host determined (environment variable) port.
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));