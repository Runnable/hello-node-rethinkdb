'use strict'
const http = require('http')
const r = require('rethinkdb')

const j = (obj) => JSON.stringify(obj, null, '  ')

http.createServer(function (req, res) {
  let opts = {
    IS_MIRRORED_DOCKERFILE: process.env.IS_MIRRORED_DOCKERFILE
  }
  res.writeHead(200, {'Content-Type': 'text/plain'})
  if (process.env.RETHINKDB) {
    console.log('Connecting to Rethinkdb...')
    r.connect({
      host: process.env.RETHINKDB
    }, function(err, conn) {
      if (err) {
        res.end(j({
          message: 'Hello: Error connecting to DB',
          opts: opts,
          err: err
        }))
      }
      res.end(j({
        message: 'Hello: Succesfully connected to DB',
        opts: opts
      }))
    })
  } else {
    res.end(j({
      message: 'Hello: No RethinkDB Variables set',
      opts: opts
    }))
  }
}).listen(process.env.PORT || 80)

console.log('Server running at http://127.0.0.1:80/')
