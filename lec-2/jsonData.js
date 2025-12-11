

// import data from './data.js';

const http = require('http')
 const user = require( './data.json' );

let jsonData = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
   

    res.end(JSON.stringify(user));
});

jsonData.listen(8000, () => {
    console.log('JSON server is running on port 8000');

});