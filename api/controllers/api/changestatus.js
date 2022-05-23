/**
 * Module dependencies
 */

// ...


/**
 * api/changestatus.js
 *
 * Changestatus api.
 */
module.exports = async function changestatus(req, res) {
    let post = req.body;
    await Chantier.updateOne({ id: post.id }).set({ status: post.status });
    if (post.status == 0) {
        await Ouvrier.update({ chantier: post.id, status: 2 }).set({ status: 1, chantier: null });
    }
    return res.ok();
};