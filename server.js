// Dependencies
const express = require('express');
const path = require('path');

// Import express-session & express-handlebars
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers/index.js');
const sequelize = require('./config/connection');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3012;

// set up and use sessions with sess object as argument
const sess = {
    secret: 'myPassword',
    resave: false,
    saveUninitialized: true,
};
app.use(session(sess));

// create handlebars engine and use as the view engine
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use express.json, express.urlencoded and static public files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(routes);

// Starts the server to begin listening and connects app to database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
