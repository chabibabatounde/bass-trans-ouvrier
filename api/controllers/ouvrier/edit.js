/**
 * Module dependencies
 */

// ...


/**
 * ouvrier/edit.js
 *
 * Edit ouvrier.
 */
module.exports = async function edit(req, res) {

    let variables = await sails.helpers.init(req, res);
    //let variables = { page: {} }
    variables.ouvrier = await Ouvrier.findOne({ id: req.param("idouvrier") }).populate("piecesJointes").populate("categorie").populate("status").populate("chantier");

    variables.page.title = "Modifier un ouvrier - BASS TRANS";
    variables.page.name = variables.ouvrier.nom + " " + variables.ouvrier.prenom;
    let post = req.body;
    if (post) {
        req.file('pieceIdentite').upload({
            maxBytes: 31457280,
            dirname: "../../assets/fileStorage/ouvrier/identity/",
        }, async function(err, uploadedFiles) {
            if (uploadedFiles) {
                for (let i = 0; i < uploadedFiles.length; i++) {
                    let filename = uploadedFiles[i].fd.split("/");
                    await PiecesJointes.create({ filename: filename[filename.length - 1], ouvrier: variables.ouvrier.id })
                    variables.ouvrier = await Ouvrier.findOne({ id: req.param("idouvrier") }).populate("piecesJointes").populate("categorie").populate("status").populate("chantier");
                }
                if (err) {
                    throw err
                }
            }
        });
        //post.pieceIdentite = filename;
        await Ouvrier.updateOne({ id: variables.ouvrier.id }).set(post);
        variables.ouvrier = await Ouvrier.findOne({ id: req.param("idouvrier") }).populate("piecesJointes").populate("categorie").populate("status").populate("chantier");
    }
    variables.categories = await Categorie.find().sort("intitule ASC");
    variables.status = await Status.find().sort("intitule ASC");
    return res.view("pages/ouvrier/edit", variables);

};