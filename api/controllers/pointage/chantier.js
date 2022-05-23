/**
 * Module dependencies
 */

// ...


/**
 * pointage/chantier.js
 *
 * Chantier pointage.
 */
module.exports = async function chantier(req, res) {

    let variables = await sails.helpers.init(req, res);

    variables.page.title = "Pointage des agents du chantier - BASS TRANS";

    variables.chantier = await Chantier.findOne({ id: req.param("idchantier") });
    variables.chantier.membres = await Ouvrier.find({ chantier: req.param("idchantier") }).populate('categorie');

    variables.pointages = await Pointage.find().populate('ouvrier').populate('chantier').sort('id DESC').limit(10);

    return res.view("pages/pointage/chantier", variables);

};