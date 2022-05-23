/**
 * Module dependencies
 */

// ...


/**
 * chantier/main.js
 *
 * Main chantier.
 */
module.exports = async function main(req, res) {

    let variables = await sails.helpers.init(req, res);

    variables.page.title = "Gestion des chantiers - BASS TRANS";
    variables.page.name = "Gestion  des chantiers";

    let post = req.body;
    if (post) {
        let chantier = await Chantier.create(post).fetch();
        variables.page.message = "Chantier " + chantier.intitule + " ajouté avec succès"
    }
    variables.chantiers = await Chantier.find().sort("intitule ASC").sort("status DESC");

    return res.view("pages/chantier/main", variables);

};