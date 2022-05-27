/**
 * Module dependencies
 */

// ...


/**
 * api/changeouvrierstatus.js
 *
 * Changeouvrierstatus api.
 */
module.exports = async function changeouvrierstatus(req, res) {

    let post = req.body;
    await Ouvrier.update({ id: post.id }).set({ status: post.status });
    return res.ok();

};