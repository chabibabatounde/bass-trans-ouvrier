/**
 * Module dependencies
 */

// ...


/**
 * apipointagemark.js
 *
 * Apipointagemark something.
 */
module.exports = async function apipointagemark(req, res) {

    let post = req.body;

    let response = {
        code: 500,
        message: "Une erreur est survenue dans l'enregistrement des heures. veuillez ressayer",
        data: []
    }

    let pointage = await Pointage.create(post).fetch();

    if (pointage) {
        response.code = 200;
        response.message = "Pointage enregistré avec success";
    }

    response.data = await Pointage.find({ equipe: post.equipe }).populate("ouvrier").limit(10).sort("id DESC");

    return res.json(response);

};