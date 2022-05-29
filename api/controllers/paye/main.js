/**
 * Module dependencies
 */

// ...


/**
 * paye/main.js
 *
 * Main paye.
 */
module.exports = async function main(req, res) {

    let variables = { page: {} }
    variables.page.title = "Etablissement du bulletin de paye - BASS TRANS";
    variables.page.name = "Bulletin de paye"
    variables.ouvriers = await Ouvrier.find().populate("chantier").populate("categorie").populate("status");
    let post = req.body;
    if (post) {
        variables.post = post;
        variables.ouvrier = await Ouvrier.findOne({ id: post.selected }).populate("status").populate("chantier").populate("categorie");
        variables.page.name = "Bulletin de paye - " + variables.ouvrier.nom + " " + variables.ouvrier.prenom
        let dateDebutArray = post.dateDebut.split("-")
        let dateFinArray = post.dateFin.split("-")
        let dateDebut = new Date(dateDebutArray[0], dateDebutArray[1], dateDebutArray[2], 00, 00, 00).getTime()
        let dateFin = new Date(dateFinArray[0], dateFinArray[1], dateFinArray[2], 23, 59, 59).getTime()
        variables.pointages = await Pointage.find({ ouvrier: post.selected, dateDebutInt: { '>=': dateDebut }, dateFinInt: { "<=": dateFin } }).populate("ouvrier").populate("chantier");
        return res.view("pages/paye/detais", variables);
    } else {
        return res.view("pages/paye/main", variables);
    }

};