const cool = require('cool-ascii-faces')

var express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var UtilisateurController = require('./Utilisateur/utilisateurController');
var ChaineController = require('./Chaine/chaineController');
app.use('/utilisateur', UtilisateurController);
app.use('/chaine', ChaineController);

app.get('/cool', (req, res) => res.send(cool()))


module.exports = app;