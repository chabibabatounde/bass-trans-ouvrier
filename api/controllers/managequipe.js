/**
 * Module dependencies
 */

// ...


/**
 * managequipe.js
 *
 * Managequipe something.
 */
module.exports = async function managequipe(req, res) {

    let variables = await sails.helpers.init(req, res);
    let idequipe = req.param("idequipe");
    let post = req.body;
    if (post) {
        post.equipe = idequipe;
        await MembreEquipe.create(post).fetch();
    }
    let equipe = await Equipe.findOne({ id: idequipe });
    variables.page.name = equipe.intitule;
    variables.categories = await Categorie.find();
    equipe.membres = await MembreEquipe.find({ equipe: equipe.id }).populate("categorie").populate("ouvrier");


    let membreIds = [];
    for (let i = 0; i < equipe.membres.length; i++) {
        membreIds.push(equipe.membres[i].ouvrier.id);
    }
    variables.equipe = equipe;

    variables.ouvriers = await Ouvrier.find({
        id: { '!=': membreIds }
    });

    return res.view("pages/equipeDetails", variables);

};