const express = require('express');
const app = express();
const client = require('./db');
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}));
app.use('/', express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/blog.html');
});
app.post('/', (req, res) => {
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
            res.send('successfully logged in');
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

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});