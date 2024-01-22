const express = require('express');
const morgan = require('morgan');

// express app
const app = express(); 

// register view engine
app.set('view engine','ejs');
app.set('views','myview')

// listen for requests
app.listen(3000);

app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});



app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create');
})

// 404
app.use((req, res) => {
    res.render('404');
})