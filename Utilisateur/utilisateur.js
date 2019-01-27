var db = require('../db/db');

var Utilisateur = {
    getUtilisateurs: function(callback)
    {
        return db.query('SELECT * from utilisateurs', callback);
    },
    createUtilisateur: function (Utilisateur, callback) {
        return db.query('Insert into utilisateurs (utilisateurId, utilisateurNom, utilisateurPrenom, utilisateurEmail) values(NULL, ?, ?, ?)',[Utilisateur.Nom, Utilisateur.Prenom, Utilisateur.Email], callback);
    },
    UpdateUtilisateur: function (Utilisateur, callback) {
        return db.query('UPDATE utilisateurs SET utilisateurNom = ? , utilisateurPrenom = ? , utilisateurEmail = ?  WHERE utilisateurs.utilisateurId =  ? ',[Utilisateur.Nom, Utilisateur.Prenom, Utilisateur.Email, Utilisateur.Id], callback);
    }
}

module.exports = Utilisateur;