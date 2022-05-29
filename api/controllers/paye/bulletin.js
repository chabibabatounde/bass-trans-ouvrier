/**
 * Module dependencies
 */

// ...


/**
 * paye/bulletin.js
 *
 * Bulletin paye.
 */
module.exports = async function bulletin(req, res) {
    let variables = await sails.helpers.init(req, res);
    //let variables = { page: {} }
    let post = {
        selected: req.param("ouvrier"),
        du: req.param("du"),
        au: req.param("au"),
    }
    variables.ouvrier = await Ouvrier.findOne({ id: post.selected }).populate("status").populate("chantier").populate("categorie");
    variables.page.name = "Bulletin de paye - " + variables.ouvrier.nom + " " + variables.ouvrier.prenom
    variables.pointages = await Pointage.find({ ouvrier: post.selected }).populate("ouvrier").populate("chantier");
    return res.view("pages/paye/bulletin", variables);

};