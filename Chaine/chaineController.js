
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Chaine = require('./chaine');

router.get('/', function (req, res) {
    Chaine.getAllChaines(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/bytype', function (req, res) {
    Chaine.GetChaineByType(req.query,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/UsersForChaineId', function (req, res) {
    Chaine.GetUsersForChaineId(req.query,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/create', function (req, res) {
    Chaine.createChaine(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});


router.post('/updateChaine', function (req, res) {
    Chaine.UpdateChaine(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});


router.get("/getChaineUsers", function(req,res) { //Chaine list with his users
    
    var chaines = {};

    Chaine.getChainesUsers(function(err,rows){

        
        if(err){
            console.error(err);
            return;
        }

       /*  else{
            res.json(rows);
        }
         */
        for (var i=0; i<rows.length; i++){

            var user = new User(rows[i]);

            if (chaines[rows[i].chaineId] != null){
                if(user._id != null ){
                    chaines[rows[i].chaineId].Users.push(user);
                }
                
            }
            else {
                chaines[rows[i].chaineId]= new ChaineModel(rows[i]);
                if(user._id != null ){
                    chaines[rows[i].chaineId].Users.push(user);
                }
            }

        }

       

         res.send(chaines);


    });

});

function ChaineModel(row){

    this._id = row.chaineId;
    this.Titre = row.chaineTitre;
    this.Type = row.typePriere;
    this.Users = [] ;


}

function User(row){

    this._id = row.userId;
    this.FirstName = row.userFirstName;
    this.LastName = row.userLastName;
  
}

module.exports = router;