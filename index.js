var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: 'amilajack/popcorn-time-desktop',
    username: 'spacecow321',
    token: 'ccd3bfdd1fa187147c9d7d3692ba5d1662677c5f'
});

app.use('/', nuts.router);
app.listen(8000);
