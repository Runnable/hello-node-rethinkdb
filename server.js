var http = require('http');
var r = require('rethinkdb');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (process.env.RETHINKDB) {
    console.log('Connecting to Rethinkdb...')
    r.connect({
      host: process.env.RETHINKDB
    }, function(err, conn) {
      if (err) {
        res.end('Hello: Error connecting to DB', err);
      }
      res.end('Hello: Succesfully connected to DB');
    });

  } else {
    res.end('Hello: No RethinkDB Variables set');
  }
}).listen(process.env.PORT || 80);

console.log('Server running at http://127.0.0.1:80/')
