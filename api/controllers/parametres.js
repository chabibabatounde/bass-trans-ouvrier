/**
 * Module dependencies
 */

// ...


/**
 * parametres.js
 *
 * Parametres something.
 */
module.exports = async function parametres(req, res) {

    let variables = await sails.helpers.init(req, res);

    variables.categories = await Categorie.find();

    variables.page.title = "Parametres - BASS TRANS";
    variables.page.name = variables.ouvrier.nom + " " + variables.ouvrier.prenom;
    let post = req.body;
    if (post) {

    }
    variables.categories = await Categorie.find().sort("intitule ASC");
    variables.status = await Status.find().sort("intitule ASC");
    return res.view("pages/ouvrier/ficheOuvrier", variables);

};