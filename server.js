var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    routes = require('./routes');

var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.disable('etag');

mongoose.connect('mongodb://localhost/timerbase');

app.get('/', routes.index);

app.use("/", express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, function() {
    console.log('Express listening on port ' + port);
});

var io = require('socket.io').listen(server);
