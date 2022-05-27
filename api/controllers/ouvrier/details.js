/**
 * Module dependencies
 */

// ...


/**
 * ouvrier/details.js
 *
 * Details ouvrier.
 */
module.exports = async function details(req, res) {

    //let variables = await sails.helpers.init(req, res);
    let variables = { page: {} }
    variables.ouvrier = await Ouvrier.findOne({ id: req.param("idouvrier") }).populate("piecesJointes").populate("categorie").populate("status").populate("chantier");

    variables.page.title = "Fiche ouvrier - BASS TRANS";
    variables.page.name = variables.ouvrier.nom + " " + variables.ouvrier.prenom;
    let post = req.body;
    if (post) {

    }
    variables.categories = await Categorie.find().sort("intitule ASC");
    variables.status = await Status.find().sort("intitule ASC");
    return res.view("pages/ouvrier/ficheOuvrier", variables);

};