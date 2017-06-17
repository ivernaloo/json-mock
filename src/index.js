var express = require('express')

// interface and export defaults/router
module.exports = {
  create: function () {
    var server = express() // create server
    server.set('json spaces', 2) // json space ?
    return server
  },
  defaults: require('./defaults'), // default
  router: require('./router') // router
}