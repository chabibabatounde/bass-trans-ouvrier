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

    let variables = { page: {} }

    variables.page.title = "Assignation des ouvriers";
    let chantier = await Chantier.findOne({ id: req.param("idchantier") });
    variables.page.name = "Chantier " + chantier.intitule;
    let post = req.body;
    if (post) {
        let chantier = await Chantier.create(post).fetch();
        variables.page.message = "Chantier " + chantier.intitule + " ajouté avec succès"
    }
    chantier.membres = await Ouvrier.find({ chantier: chantier.id }).populate("categorie").populate("status");
    for (let i = 0; i < chantier.membres.length; i++) {
        chantier.membres[i].affectation = await Affectation.find({ ouvrier: chantier.membres[i].id, chantier: chantier.id }).sort("id DESC").limit(1);
        chantier.membres[i].affectation = chantier.membres[i].affectation[0]
    }
    variables.chantier = chantier;
    variables.ouvriers = await Ouvrier.find({ status: 1 }).populate("categorie").populate("status");

    return res.view("pages/chantier/details", variables);

};