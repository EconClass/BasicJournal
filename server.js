//========================================INITIAL========================================\\
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'main',
    extname: 'hbs'
  });
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const entries = require('./controllers/entries.js');

//========================================MIDDLEWARE========================================\\
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/StoryBoard', { useNewUrlParser: true });

//========================================USE ROUTES========================================\\
app.use(entries);

//==========================================LISTEN==========================================\\
app.listen(port, () => {
    console.log('App listening on port ' + port + '!')
});
    
module.exports = app;