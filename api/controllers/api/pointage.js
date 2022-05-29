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

        let dateDebutArray = post.dateDebut.split("-")
        let dateDebutInt = new Date(dateDebutArray[0], dateDebutArray[1], dateDebutArray[2], 00, 00, 00).getTime()
        let dateFinArray = post.dateDebut.split("-")
        let dateFinInt = new Date(dateFinArray[0], dateFinArray[1], dateFinArray[2], 23, 59, 59).getTime()

        await Pointage.create({
            dateDebut: post.dateDebut,
            dateFin: post.dateFin,
            dateDebutInt: dateDebutInt,
            dateFinInt: dateFinInt,
            ouvrier: element.ouvrier,
            heures: element.heure,
            heuresSup: element.heureSup,
            montantHorraire: affectation[0].montantHoraire,
            chantier: post.chantier,
        })
    }
    return res.ok();

};