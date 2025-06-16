//make sure running latest version of the file
console.log('app.js version --- 14:17');

//variables

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const jsonFilePath = path.join(__dirname, '..', 'data', 'data.json');


const server = http.createServer((req, res) => {
// Set the allowed origin(s) for CORS
const allowedOrigin = 'https://9000-firebase-bravissimo-task-1749821916900.cluster-ombtxv25tbd6yrjpp3lukp6zhc.cloudworkstations.dev'; // The origin of your HTML page
res.setHeader('Access-Control-Allow-Origin', allowedOrigin);

// Set the allowed HTTP methods
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

// Set the allowed headers in the request
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/api/products') {

    //this code tries to post the json to the api/products url and posts an error if not

    console.log('got req.url as api/products');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {

      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('cannot post json to url');
        console.error('cannot post json to url', err);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);

      console.log('posted json to url');
      return; 
    });
    return;
  }

  

});

/// creates the server and links to the json url

server.listen(port, '0.0.0.0', () => {
  console.log(`json should be here: http://localhost:${port}/api/products`);
});
