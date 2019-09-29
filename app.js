const express = require('express');
const app = express();
const session = require('express-session');
const client = require('./db');
const port = process.env.PORT || 5000;

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(__dirname));

let ssn;

app.get('/', (req, res) => {
    ssn = req.session;
    if(ssn.name){
        res.redirect('/Posts');
    }
    res.sendFile(__dirname + '/blog.html');
});
app.post('/signup', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.pass;
    let date = new Date().toLocaleString();
    client.connect(err => {
        if(err){
            console.log(err);
        }else{
            const collection = client.db('sample').collection('users');
            collection.insertOne({
                Name: name,
                Mail: email,
                Pass: pass,
                Date: date
            });
            client.close();
            res.redirect('/Posts');
        }
    })

})
//login  page
app.get('/login' , (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

//Sign Up Page
app.get('/signup' , (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

//checking page
app.get('/check/:id', (req, res) => {
    let name = req.params.id;
    client.connect(err => {
        if(err){
            console.log(err);
        }else{
            const collection = client.db('sample').collection('users');
            collection.findOne({Name: name} ,(err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send(result);
                }
            });
        }
        client.close();
    })
})
app.post('/login', (req, res) => {
    ssn = req.session;
    ssn.name =  req.body.name;
    res.redirect('/Posts');
})



app.get('/Posts', (req, res) => {
    ssn = req.session;
    if(ssn.name){
        res.send(`<h1>hey ${ssn.name}!</h1><a href = "/logout">logout</a>`);
    }else{
        res.send('<h1>Please Login First!</h1><a href = "/login">login</a>');
    } 
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});