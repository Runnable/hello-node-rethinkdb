var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Teach me how you komecho');
});

app.listen(80);


