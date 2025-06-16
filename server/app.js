//make sure running latest version of the file
console.log('app.js version --- 13:05');

//variables

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const jsonFilePath = path.join(__dirname, '..', 'data', 'data.json');


const server = http.createServer((req, res) => {
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

/// creates the server

server.listen(port, '0.0.0.0', () => {
  console.log(`Node.js server running at http://localhost:${port}/`);
  console.log(`Product API available at http://localhost:${port}/api/products`);
});
