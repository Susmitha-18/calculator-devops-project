const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {

    let filePath = './index.html';

    if (req.url === '/style.css') {
        filePath = './style.css';
    }

    if (req.url === '/script.js') {
        filePath = './script.js';
    }

    const extname = path.extname(filePath);

    let contentType = 'text/html';

    if (extname === '.css') {
        contentType = 'text/css';
    }

    if (extname === '.js') {
        contentType = 'text/javascript';
    }

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(500);
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});