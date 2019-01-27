var db = require('../db/db');

var Chaine = {
    getAllChaines: function(callback)
    {
        return db.query('SELECT * from chaines', callback);
    },//ok
    getChainesUsers: function(callback)
    {
        return db.query('SELECT C.chaineId, C.chaineTitre, U.userId, U.userFirstName, U.userLastName, C.typePriere FROM  chaines C  LEFT JOIN inscrits I ON I.chaineId = C.chaineId LEFT JOIN utilisateurs U ON I.persId = U.userId', callback);
    },//ok
    createChaine: function (Chaine, callback) {
        return db.query('Insert into chaines (chaineId, chaineTitre, chaineNbrParticipants, typePriere) values(NULL, ?, ?, ?)',[Chaine.chaineTitre, Chaine.chaineNbrParticipants, Chaine.typePriere], callback);
    },//ok
    UpdateChaine: function (Chaine, callback) {
        return db.query('UPDATE chaines SET chaineTitre = ? , chaineNbrParticipants = ? , typePriere = ?  WHERE chaines.chaineId =  ? ',[Chaine.chaineTitre, Chaine.chaineNbrParticipants,  Chaine.typePriere, Chaine.chaineId], callback);
    },//ok
    GetUsersForChaineId: function (Chaine, callback) {
        return db.query('SELECT utilisateurs.userFirstName, utilisateurs.userLastName FROM utilisateurs, inscrits, chaines WHERE utilisateurs.userId  = inscrits.persId AND inscrits.chaineId = chaines.chaineId AND chaines.chaineId = ?',[Chaine.chaineId], callback);
    },//ok
    GetChaineByType: function (Chaine, callback) {
        return db.query('SELECT chaines.chaineTitre FROM chaines WHERE chaines.typePriere = ?', [Chaine.typePriere] , callback);
    }//ok
}

module.exports = Chaine;