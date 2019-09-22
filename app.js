const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use('/', express.static(__dirname)).listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/blog.html');
});
app.post('/', (req, res) => {
    res.sendFile(__dirname + '/blog.html');
})
//login  page
app.get('/login' , (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
// app.post('/login' , (req, res) => {
//     res.sendFile(__dirname + '/blog.html');
// });

//Sign Up Page
app.get('/signup' , (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});
// app.post('/signup' , (req, res) => {
//     res.sendFile(__dirname + '/blog.html');
// });
