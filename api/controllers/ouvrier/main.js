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

    let variables = { page: {} }
        //let variables = await sails.helpers.init(req, res);

    variables.page.title = "Gestion des ouvriers - BASS TRANS";
    variables.page.name = "Gestion des ouvriers";
    let post = req.body;
    if (post) {
        let filename = post.nom + "_" + await sails.helpers.getfilename();
        post.status = 1;
        let ouvrier = await Ouvrier.create(post).fetch();
        req.file('pieceIdentite').upload({
            maxBytes: 31457280,
            dirname: "../../assets/fileStorage/ouvrier/identity/",
        }, async function(err, uploadedFiles) {
            if (uploadedFiles) {
                for (let i = 0; i < uploadedFiles.length; i++) {
                    let filename = uploadedFiles[i].fd.split("/");
                    await PiecesJointes.create({ filename: filename[filename.length - 1], ouvrier: ouvrier.id })
                }
                if (err) {
                    throw err
                }
            }
        });
        post.pieceIdentite = filename;
        variables.page.message = post.nom + " " + post.prenom + " ajouté(e) avec succès"
    }
    variables.categories = await Categorie.find().sort("intitule ASC");
    variables.ouvriers = await Ouvrier.find().populate("categorie").populate("status").sort("nom ASC").sort("prenom ASC");
    return res.view("pages/ouvrier/main", variables);

};