var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Anton is here');
});

app.listen(80);


