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

    for (var i = 0; i < variables.ouvriers.length; i++) {
        const ouvrier = variables.ouvriers[i];
        ouvrier.affectation = await Affectation.find({ ouvrier: ouvrier.id, chantier: ouvrier.chantier.id }).sort("id DESC").limit(1);
        ouvrier.affectation = ouvrier.affectation[0]
    }


    /*for (var i = 0; i < variables.pointages.length; i++) {
        const pointage = variables.pointages[i];
        pointage.affectation = await Affectation.find({ ouvrier: pointage.ouvrier.id, chantier: pointage.chantier.id }).sort("id DESC").limit(1);
        pointage.affectation = pointage.affectation[0]
    }*/


    return res.view("pages/pointage/ouvriers", variables);

};