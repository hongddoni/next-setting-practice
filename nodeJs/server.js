const http = require('http');
const { hostname } = require('os');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((rq, rs) => {
    rs.statusCode = 200;
    rs.setHeader('Content-Type', 'text/plain');
    rs.end('Hello world');
})

server.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}`);
})