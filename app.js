const express = require('express');
const app = express();
const controller = require('./controllers/controller');
const port = 3000;

app.set('view engine', 'ejs');
app.use('/', express.static('./public'));

controller(app);
app.listen(process.env.PORT || port, (err) => {
    if(!err) {
        console.log("Server Running At Port : ", port);
    }
});