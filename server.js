// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

// Set up Express
var app = express();
var PORT = process.env.PORT || 3000;
var db = require('./models');

//Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_Controller.js');
app.use('/', router);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
