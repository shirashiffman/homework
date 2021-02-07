const app = require('connect')();

app.use((req, res, next)=>{
    res.setHeader('Content-Type', 'text/html');
    // res.write("hello");
    next();

})

app.use(require('./queryParser'));

app.use('/admin', (req, res, next)=>{
        res.end("This is the admin page");
    })
app.listen(80);