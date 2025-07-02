const http = require('node:http');
const hostname = 'localhost';
const port = 3011;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>Hello</h1><h2>World</h2>\n');
});

server.listen(port, hostname, () => {
    console.log(`Gabriel's Server http://${hostname}:${port}/`);
});