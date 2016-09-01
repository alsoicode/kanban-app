// Validates that the dist build was successful
// by serving the files in the "dist" directory
// via the simplest possible Express application

var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
