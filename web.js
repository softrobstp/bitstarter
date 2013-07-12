
var fs = require('fs');
var buf=new Buffer(fs.readFileSync('index.html'));

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8",0));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
