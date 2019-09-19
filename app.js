const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use('/', express.static(__dirname)).listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/blog.html');
});
