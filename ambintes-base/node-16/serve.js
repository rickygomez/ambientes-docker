const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    let nodeVersion = process.version; 
    res.end(`Testando nodeJs | versão ${nodeVersion}`);
});

server.listen(3000);
