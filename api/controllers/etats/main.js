/**
 * Module dependencies
 */

// ...


/**
 * etats/main.js
 *
 * Main etats.
 */
module.exports = async function main(req, res) {

    let variables = await sails.helpers.init(req, res);
    variables.page.title = "Générer vos états et bilans";
    variables.page.name = "États et bilans"
    variables.chantiers = await Chantier.find().sort('intitule ASC');
    return res.view("pages/etats/main", variables);

};