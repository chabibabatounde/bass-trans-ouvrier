/**
 * Module dependencies
 */

// ...


/**
 * pointage.js
 *
 * Pointage something.
 */
module.exports = async function pointage(req, res) {

    let variables = await sails.helpers.init(req, res);
    //let variables = { page: {} }
    variables.page.name = "Pointage des heures"

    variables.chantiers = await Chantier.find();
    //variables.pointages = await Pointage.find().populate("ouvrier").limit(10).sort("id DESC");

    return res.view("pages/pointage/main", variables);

};