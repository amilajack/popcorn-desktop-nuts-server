var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: 'amilajack/popcorn-time-desktop',
    username: 'amilajack',
    token: process.env.TOKEN
});

app.use('/', nuts.router);
app.listen(80);
