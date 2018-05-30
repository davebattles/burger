var express= require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));
app.set('view engine','handlebars');
var routes = require('./controllers/burgers_controller.js');
app.use('/',routes);
var port = 3000;
app.listen(port, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port);
});