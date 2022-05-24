/**
 * Module dependencies
 */

// ...


/**
 * pointage/pointages.js
 *
 * Pointages pointage.
 */
module.exports = async function pointages(req, res) {


    let variables = { page: {} }
    variables.page.name = "Pointage des heures les ouvriers";
    variables.ouvriers = await Ouvrier.find({ status: 2 }).populate("chantier").sort("nom ASC").populate('categorie').sort("prenom DESC");
    variables.pointages = await Pointage.find().populate('ouvrier').populate('chantier').sort('id DESC').limit(10);

    return res.view("pages/pointage/ouvriers", variables);

};