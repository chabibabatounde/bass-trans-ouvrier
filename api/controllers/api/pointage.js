/**
 * Module dependencies
 */

// ...


/**
 * api/pointage.js
 *
 * Pointage api.
 */
module.exports = async function pointage(req, res) {

    let post = req.body;
    for (let i = 0; i < post.pointages.length; i++) {
        const element = post.pointages[i];
        let affectation = await Affectation.find({ ouvrier: element.ouvrier, chantier: post.chantier }).sort("id DESC").limit(1);
        await Pointage.create({
            dateDebut: post.dateDebut,
            dateFin: post.dateFin,
            ouvrier: element.ouvrier,
            heures: element.heure,
            heuresSup: element.heureSup,
            montantHorraire: affectation[0].montantHoraire,
            chantier: post.chantier,
        })
    }
    return res.ok();

};