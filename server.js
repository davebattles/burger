var express= require('express');
var bodyParset = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}))

