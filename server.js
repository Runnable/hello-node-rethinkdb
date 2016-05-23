'use strict'
const Promise = require('bluebird')
const http = require('http')
const r = require('rethinkdb')
require('rethinkdb-init')(r);

const j = (obj) => JSON.stringify(obj, null, '  ')

http.createServer(function (req, res) {
  let opts = {
    IS_MIRRORED_DOCKERFILE: process.env.IS_MIRRORED_DOCKERFILE,
    RUNNABLE_CONTAINER_ID: process.env.RUNNABLE_CONTAINER_ID,
    HOSTNAME: process.env.HOSTNAME,
  }
  if (process.env.NAME) {
    opts.NAME = process.env.NAME
  }
  res.writeHead(200, {'Content-Type': 'text/plain'})
  if (!process.env.RETHINKDB) {
    console.log('No `RETHINKDB` ENV vars set')
    res.end(j({
      message: 'Hello: No RethinkDB Variables set',
      opts: opts
    }))
  }
  console.log('Connecting to Rethinkdb...')
  r.init({
    host: process.env.RETHINKDB,
    db: 'test'
  }, [
    'hello-world',
    process.env.DB_NAME || 'master'
  ])
    .then(function (conn) {
      console.log('Getting db list...')
      return Promise.all([r.dbList().run(conn), conn])
    })
    .then(function (dbList, conn) {
      res.end(j({
        message: 'Hello: Succesfully connected to DB',
        opts: opts
      }))
    })
    .catch(function (err) {
      console.log('Error: ', err)
      res.end(j({
        message: 'Hello: Error connecting to DB',
        opts: opts,
        err: err
      }))
    })
}).listen(process.env.PORT || 80)

console.log('Server running at http://127.0.0.1:80/')
