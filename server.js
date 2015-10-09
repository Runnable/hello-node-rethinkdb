var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('17');
}).listen(process.env.PORT || 80);

console.log('Server running at http://127.0.0.1:80/')
