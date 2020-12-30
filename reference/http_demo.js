/*
 * @ 56 minutes, 21 seconds into video: https://www.youtube.com/watch?v=fBNz5xF-Kx4
 */

 const http = require('http');

 //create a server object 
 http.createServer( (req, res)=> {
     // When we get a req (request) we write a response (res)
     res.write('Hello World');      // this just outputs to the browser
     res.end();

 } ).listen(5000, () => console.log('server running...'));  //callback to console log

 /*
  * At this point open a browser and navigate to <localhost:5000>.
  *
  * To stop the server from running, push ctl+c
  */

