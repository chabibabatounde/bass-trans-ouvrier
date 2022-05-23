/**
 * Module dependencies
 */

// ...


/**
 * ouvrier/main.js
 *
 * Main ouvrier.
 */
module.exports = async function main(req, res) {

    //let variables = await sails.helpers.init(req, res);
    let variables = await sails.helpers.init(req, res);

    variables.page.title = "Gestion des ouvriers - BASS TRANS";
    variables.page.name = "Gestion des ouvriers";
    let post = req.body;
    if (post) {
        let filename = post.nom + "_" + await sails.helpers.getfilename();
        post.status = 1;
        req.file('pieceIdentite').upload({
            maxBytes: 1000000000,
            dirname: "../../assets/fileStorage/ouvrier/identity/",
            saveAs: filename
        }, async function(err, uploadedFile) {
            if (uploadedFile) {
                if (err) {
                    console.log(err)
                    throw err
                }
            }
        });
        post.pieceIdentite = filename;
        await Ouvrier.create(post)
        variables.page.message = post.nom + " " + post.prenom + " ajouté(e) avec succès"
    }
    variables.categories = await Categorie.find().sort("intitule ASC");
    variables.ouvriers = await Ouvrier.find().populate("categorie").populate("status").sort("nom ASC").sort("prenom ASC");
    return res.view("pages/ouvrier/main", variables);

};