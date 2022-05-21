/**
 * Module dependencies
 */

// ...


/**
 * apilastpointage.js
 *
 * Apilastpointage something.
 */
module.exports = async function apilastpointage(req, res) {

    return res.json(await Pointage.find({ equipe: req.param("idequipe") }).populate("ouvrier").limit(10).sort("id DESC"));

};