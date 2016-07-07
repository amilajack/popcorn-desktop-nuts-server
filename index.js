var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: 'amilajack/popcorn-time-desktop',
    username: 'spacecow321',
    token: process.env.TOKEN
});

app.use('/', nuts.router);
app.listen(8000);
