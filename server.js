var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express');
var path = require('path');
var app = new (require('express'))()
var port = 3010

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, './.tmp')))
app.use(express.static(path.join(__dirname, './app')))

app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
