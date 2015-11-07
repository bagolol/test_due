var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res, err) {
    if (err) throw err;
    res.send('index.html');
});


app.get('/issues', function (req, res) {
  fs.readFile('./issues.json','utf8', function (err, data) {
    if (err) throw err;
    var prices = JSON.parse(data);
    res.send(prices);
  });
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening at http://%s:%s', host, port);
});

