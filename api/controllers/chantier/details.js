/**
 * Module dependencies
 */

// ...


/**
 * chantier/details.js
 *
 * Details chantier.
 */
module.exports = async function details(req, res) {

    let variables = await sails.helpers.init(req, res);

    variables.page.title = "Assignation des ouvriers";
    let chantier = await Chantier.findOne({ id: req.param("idchantier") });
    variables.page.name = "Chantier " + chantier.intitule;
    let post = req.body;
    if (post) {
        let chantier = await Chantier.create(post).fetch();
        variables.page.message = "Chantier " + chantier.intitule + " ajouté avec succès"
    }
    chantier.membres = await Ouvrier.find({ chantier: chantier.id }).populate("categorie").populate("status");

    variables.chantier = chantier;
    variables.ouvriers = await Ouvrier.find({ status: 1 }).populate("categorie").populate("status");

    return res.view("pages/chantier/details", variables);

};