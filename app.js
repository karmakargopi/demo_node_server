const express = require('express');
const app = express();
const controller = require('./controllers/controller');

app.set('view engine', 'ejs');
app.use('/', express.static('./public'));

controller(app);
app.listen(process.env.PORT || 3000);