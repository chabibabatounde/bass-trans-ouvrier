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
    //let variables = { page: {} }

    variables.page.title = "Pointage des agents du chantier - BASS TRANS";

    variables.chantier = await Chantier.findOne({ id: req.param("idchantier") });
    variables.chantier.membres = await Ouvrier.find({ chantier: req.param("idchantier") }).populate('categorie').populate('chantier');

    for (var i = 0; i < variables.chantier.membres.length; i++) {
        const membre = variables.chantier.membres[i];
        membre.affectation = await Affectation.find({ ouvrier: membre.id, chantier: variables.chantier.id }).sort("id DESC").limit(1);
        membre.affectation = membre.affectation[0]
    }

    variables.pointages = await Pointage.find().populate('ouvrier').populate('chantier').sort('id DESC').limit(10);


    for (var i = 0; i < variables.pointages.length; i++) {
        const pointage = variables.pointages[i];
        pointage.affectation = await Affectation.find({ ouvrier: pointage.ouvrier.id, chantier: pointage.chantier.id }).sort("id DESC").limit(1);
        pointage.affectation = pointage.affectation[0]
    }

    return res.view("pages/pointage/chantier", variables);

};