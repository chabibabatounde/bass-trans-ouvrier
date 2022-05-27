/**
 * Ouvrier.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
        nom: {
            type: "String"
        },
        prenom: {
            type: "String"
        },
        dateNaissance: {
            type: "String"
        },
        lieuNaissance: {
            type: "String"
        },
        contact: {
            type: "String"
        },
        email: {
            type: "String"
        },
        adresse: {
            type: "String"
        },
        urgence: {
            type: "String"
        },

        dateContrat: {
            type: "String"
        },
        numeroCnss: {
            type: "String"
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
        categorie: {
            model: "Categorie"
        },
        status: {
            model: "Status"
        },
        chantier: {
            model: "Chantier",
        },

        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

        piecesJointes: {
            collection: "piecesJointes",
            via: "ouvrier"
        },

    },

};