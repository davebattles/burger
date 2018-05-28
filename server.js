var express= require('express');
var bodyParset = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
  defaultLayout: 'main'
}));
app.set('view engine','handlebars');
var port = 3000;
app.listen(port);