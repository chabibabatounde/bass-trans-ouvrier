/**
 * Module dependencies
 */

// ...


/**
 * logout.js
 *
 * Logout something.
 */
module.exports = async function logout(req, res) {

    delete req.session.bassTransOuvrier;
    return res.redirect("/")

};