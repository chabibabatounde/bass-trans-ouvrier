/**
 * Module dependencies
 */

// ...


/**
 * equipes.js
 *
 * Equipes something.
 */
module.exports = async function equipes(req, res) {

    let variables = await sails.helpers.init(req, res);
    variables.page.name = "Equipes"
    let post = req.body;
    if (post) {
        let equipe = await Equipe.create(post).fetch();
        return res.redirect("/equipe/details/" + equipe.id);
    }
    variables.equipes = await Equipe.find();
    return res.view("pages/equipes", variables);

};