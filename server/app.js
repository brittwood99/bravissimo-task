//make sure running latest version of the file
console.log('app.js version --- 14:17');

//variables

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const jsonFilePath = path.join(__dirname, '..', 'data', 'data.json');
const url = require('url'); 
const staticFilesRoot = path.join(__dirname, '..'); // <-- Also ensure this is defined


const server = http.createServer((req, res) => {
//  CORS
const allowedOrigin = 'https://9000-firebase-bravissimo-task-1749821916900.cluster-ombtxv25tbd6yrjpp3lukp6zhc.cloudworkstations.dev'; // The origin of your HTML page
res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
//this code tries to post the json to the api/products url and posts an error if not

  if (req.url === '/api/products') {


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

  
  const parsedUrl = url.parse(req.url);
  let requestPath = parsedUrl.pathname;

  // Serve index.html for the root request '/'
  if (requestPath === '/') {
      requestPath = '/index.html';
  }

  // Prevent directory traversal by sanitizing the path
  const sanitizedPath = path.normalize(requestPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(staticFilesRoot, sanitizedPath);

  // Determine basic content type based on file extension
  const extname = path.extname(filePath);
  let contentType = 'text/plain'; // Default to plain text

  if (extname === '.html') {
    contentType = 'text/html';
  } else if (extname === '.css') {
    contentType = 'text/css';
  } else if (extname === '.js') {
    contentType = 'text/javascript';
  }
  // Add more specific types if needed (e.g., application/json for data.json if served statically)


  // Read and serve the requested file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        console.error(`File not found: ${filePath}`);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File Not Found!');
      } else {
        console.error(`Error reading file ${filePath}: ${error}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error: ' + error.code);
      }
    } else {
      console.log(`Served file: ${filePath}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });

});

/// creates the server and links to the json url

server.listen(port, '0.0.0.0', () => {
  console.log(`public app should be here: http://localhost:${port}/`);
  console.log(`products json should be here: http://localhost:${port}/api/products`);
});
