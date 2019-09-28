const mongoclient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://vik:VikNashcr7@cluster0-ujtth.mongodb.net/test?retryWrites=true&w=majority';

const client = new mongoclient(uri , {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = client;