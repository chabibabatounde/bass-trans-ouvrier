/**
 * Module dependencies
 */

// ...


/**
 * apipointage.js
 *
 * Apipointage something.
 */
module.exports = async function apipointage(req, res) {

    return res.json(await MembreEquipe.find({ equipe: req.param("idequipe") }).populate("categorie").populate("ouvrier"));

};