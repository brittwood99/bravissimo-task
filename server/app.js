// server/app.js (with static file serving added)

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Path to your JSON file
const jsonFilePath = path.join(__dirname, '..', 'data', 'data.json');

// Determine the root directory for serving static files (your project root)
const staticFilesRoot = path.join(__dirname, '..');

const server = http.createServer((req, res) => {
  //console.log(`Server received request: ${req.method} ${req.url}`);
//yes printed
  // --- Define and handle the /api/products route ---
 // console.log('req url'); //yes printed in terminal
  //console.log(req.url);
  if (req.url === '/api/products') {
    console.log('Handling /api/products request.');

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading data.');
        console.error('File read error:', err);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
      console.log('Sent data from data.json for /api/products.');

     
    });

    return;
  }

  // --- Add code here to serve your front-end files (HTML, CSS, JS) ---
  // This is the logic to serve index.html, main.js, dataLoader.js, style.css etc.

  let filePath = path.join(staticFilesRoot, req.url); // Construct the path to the requested file relative to your project root

  // Serve index.html for the root request
  if (filePath.endsWith('/') || req.url === '/') {
      filePath = path.join(staticFilesRoot, 'index.html');
  }


  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
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
      // Add more file types as needed
  }

  // Read and serve the requested file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found (send 404)
        console.error(`File not found: ${filePath}`);
        res.writeHead(404);
        res.end('File Not Found!');
      } else {
        // Other server errors (send 500)
        console.error(`Error reading file ${filePath}: ${error}`);
        res.writeHead(500);
        res.end('Internal Server Error: ' + error.code);
      }
    } else {
      // File found and served successfully (send 200)
      console.log(`Served file: ${filePath}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });


});

server.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}/`);
  console.log(`Product API available at http://localhost:${port}/api/products`);
});
