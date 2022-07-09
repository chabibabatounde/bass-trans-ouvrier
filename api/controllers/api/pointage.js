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
        let heuresNormale = 0;
        if (element.heuresNormale != "") {
            heuresNormale = element.heuresNormale;
        }
        let heuresNormaleSup = 0;
        if (element.heuresNormaleSup != "") {
            heuresNormaleSup = element.heuresNormaleSup;
        }
        let heuresNuit = 0;
        if (element.heuresNuit != "") {
            heuresNuit = element.heuresNuit;
        }
        let heuresNuitSup = 0;
        if (element.heuresNuitSup != "") {
            heuresNuitSup = element.heuresNuitSup;
        }
        await Pointage.create({
            dateDebut: post.dateDebut,
            dateDebutInt: dateDebutInt,
            dateFin: post.dateFin,
            dateFinInt: dateFinInt,
            heuresNormale: heuresNormale,
            heuresNormaleSup: heuresNormaleSup,
            heuresNuit: heuresNuit,
            heuresNuitSup: heuresNuitSup,
            montantHorraire: affectation[0].montantHoraire,
            ouvrier: element.ouvrier,
            chantier: post.chantier,
        });
    }
    return res.ok();
};