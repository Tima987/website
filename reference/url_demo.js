const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

////-- Get Serialized URL --////
// console.log(myUrl.href);

////-- Host (root domain) --////
// console.log*(myUrl.host);

////-- Hostname (does not get port) --////
// console.log(myUrl.hostname);

////-- Pathname --////
// console.log(myUrl.pathname);

////-- serialized query --////
// console.log(myUrl.search);

////-- Params object (things in the URL path) --////
// console.log(myUrl.searchParams);

////-- Add parameters dynamcially (can add things to the URL) --////
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

////-- Loop through parameters --////
myUrl.searchParams.forEach( (value, name) => console.log(`${name}: ${value}`) )