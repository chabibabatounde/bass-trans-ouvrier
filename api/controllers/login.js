/**
 * Module dependencies
 */

// ...


/**
 * login.js
 *
 * Login something.
 */
module.exports = async function login(req, res) {


    let variables = { pageTitle: "Connectez vous | BassTrans " };
    let post = req.body;
    if (post) {
        let utilisateur = await Utilisateur.find(post);
        if (utilisateur.length == 1) {
            req.session.bassTransOuvrier = utilisateur[0];
            return res.redirect("/");
        }
    }
    return res.view("login", variables);

};