/**
 * Module dependencies
 */

// ...


/**
 * etats/bilan.js
 *
 * Bilan etats.
 */
module.exports = async function bilan(req, res) {
    let variables = await sails.helpers.init(req, res);
    let post = req.body;
    variables.page.title = "Fiche de paye du " + post.dateDebut + " au " + post.dateFin;
    let ouvriers = await Ouvrier.find({ chantier: post.chantier })
    let infos = [];
    let montantTotal = 0;
    for (let i = 0; i < ouvriers.length; i++) {
        let ouvrier = ouvriers[i];
        let ligne = {
            nomPrenom: ouvrier.nom + " " + ouvrier.prenom,
            heuresNormale: 0,
            heuresNormaleSup: 0,
            heuresNuit: 0,
            heuresNuitSup: 0,
            montantTotal: 0,
            heureTotal: 0,
            cnss: 0,
            salaireNet: 0,
        };
        let dateDebutArray = post.dateDebut.split("-")
        let dateFinArray = post.dateFin.split("-")
        let dateDebut = new Date(dateDebutArray[0], dateDebutArray[1], dateDebutArray[2], 00, 00, 00).getTime()
        let dateFin = new Date(dateFinArray[0], dateFinArray[1], dateFinArray[2], 23, 59, 59).getTime()
        let pointages = await Pointage.find({ ouvrier: ouvrier.id, chantier: post.chantier, dateDebutInt: { '>=': dateDebut }, dateFinInt: { "<=": dateFin } });
        for (let j = 0; j < pointages.length; j++) {
            let pointage = pointages[j];
            ligne.heuresNormale += pointage.heuresNormale;
            ligne.heuresNormaleSup += pointage.heuresNormaleSup;
            ligne.heuresNuit += pointage.heuresNuit;
            ligne.heuresNuitSup += pointage.heuresNuitSup;
            ligne.montantTotal += pointage.heuresNormale * pointage.montantHorraire;
            ligne.montantTotal += ((pointage.montantHorraire / 100 * 12) + pointage.montantHorraire) * pointage.heuresNormaleSup;
            let montNH = ((pointage.montantHorraire / 100 * 50) + pointage.montantHorraire)
            let montN = montNH * pointage.heuresNuit
            ligne.montantTotal += montN;
            ligne.montantTotal += ((montNH / 100 * 12) + montNH) * pointage.heuresNuitSup;
        }
        if (ligne.montantTotal > 0) {
            ligne.cnss += ligne.montantTotal / 100 * 23;
            ligne.salaireNet = ligne.cnss + ligne.montantTotal;
            montantTotal += ligne.salaireNet;
            ligne.cnss = ligne.cnss.toFixed(2);
            ligne.salaireNet = ligne.salaireNet.toFixed(2);
            infos.push(ligne);
        }
    }
    let chantier = await Chantier.findOne({ id: post.chantier })
    variables.montantTotal = montantTotal;
    variables.infos = infos;
    variables.chantier = chantier;
    variables.post = post;
    variables.page.name = "États et bilans : " + chantier.intitule;
    return res.view("pages/etats/bilan", variables);
};