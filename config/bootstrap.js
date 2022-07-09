/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

    // By convention, this is a good place to set up fake data during development.
    //
    // For example:
    // ```
    // // Set up fake development data (or if we already have some, avast)
    // if (await User.count() > 0) {
    //   return;
    // }
    //
    // await User.createEach([
    //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
    //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
    //   // etc.
    // ]);
    // ```

    /*
    let imports = await Import.find();
    let etape = 0;
    for (let i = 0; i < imports.length; i++) {
        let imp = imports[i];
        let tabnom = imp.nomPrenom.trim().split(' ');
        let nom = "";
        let prenom = "";
        nom = tabnom[0].trim();
        for (let i = 1; i < tabnom.length; i++) {
            prenom = tabnom[i].trim() + " ";
        }
        let idcat = { id: 0 };
        let cat = await Categorie.find({ intitule: imp.categorie + " - " + imp.montantHorraire.toUpperCase() });
        if (cat.length == 1) {
            idcat = cat[0];
        } else {
            if (imp.montantHorraire.toUpperCase() == "") {
                idcat = await Categorie.create({ intitule: imp.categorie, montantHorraire: imp.niveau }).fetch()
            } else {
                idcat = await Categorie.create({ intitule: imp.categorie + " - " + imp.montantHorraire.toUpperCase(), montantHorraire: imp.niveau }).fetch()
            }
        }
        let ouv = await Ouvrier.create({
            nom: nom,
            prenom: prenom,
            status: 2,
            categorie: idcat.id,
            chantier: imp.chantier
        }).fetch();

        await Affectation.create({
            montantHoraire: idcat.montantHorraire,
            ouvrier: ouv.id,
            badge: imp.badge,
            chantier: imp.chantier,
        })

    }
    */

};