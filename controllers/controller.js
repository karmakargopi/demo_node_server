module.exports = (app) => {

    const bodyParser = require('body-parser');

    // creating application/json parser
    const jsonParser = bodyParser.json();

    // creating application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    var data = [ {item: 'Tennis'}, {item: 'Cooking'}, {item: 'Swimming'} ];

    app.get('/', (req, res) => {
        res.render('homepage', {todos: data});
    });
    
    app.get('/contact', (req, res) => {
        res.send('This is a contact page');
    });
    
    app.get('/profile/:name', (req, res) => {
        const data = {age:30, job:'Manager'}
        res.render('profile', {person: req.params.name, data: data});
    });
    
    // POST /login gets urlencoded bodies
    app.post('/login', urlencodedParser, (req, res) => {
        if (!req.body) return res.sendStatus(400);
        console.log(req.body);
        //res.send('Welcome, ' + req.body.username);
    });
};