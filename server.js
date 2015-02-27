var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('anand is heredas');
});

app.listen(80);

