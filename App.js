// Requires modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const routes = require('./routes/index');

//Express Settings
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

// Routes
app.use(routes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Express start server 
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
});