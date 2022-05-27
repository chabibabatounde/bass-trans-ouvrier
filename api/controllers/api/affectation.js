/**
 * Module dependencies
 */

// ...


/**
 * api/affectation.js
 *
 * Affectation api.
 */
module.exports = async function affectation(req, res) {

    let post = req.body;
    for (let i = 0; i < post.ouvriers.length; i++) {
        let ouvrier = post.ouvriers[i];
        await Affectation.create({
            ouvrier: ouvrier.ouvrier,
            montantHoraire: ouvrier.montant,
            chantier: post.chantier,
            badge: ouvrier.badge
        });
        await Ouvrier.updateOne({ id: ouvrier.ouvrier }).set({ status: 2, chantier: post.chantier });
    }

    return res.ok();

};