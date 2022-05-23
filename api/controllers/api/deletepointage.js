/**
 * Module dependencies
 */

// ...


/**
 * api/deletepointage.js
 *
 * Deletepointage api.
 */
module.exports = async function deletepointage(req, res) {
    let post = req.body;
    await Pointage.destroyOne({ id: post.idPointage })
    return res.ok();
};