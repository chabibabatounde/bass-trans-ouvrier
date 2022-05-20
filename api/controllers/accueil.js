/**
 * Module dependencies
 */

// ...


/**
 * accueil.js
 *
 * Accueil something.
 */
module.exports = async function accueil(req, res) {

    let variables = await sails.helpers.init(req, res);
    return res.view("pages/accueil", variables);
};