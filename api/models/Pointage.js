/**
 * Pointage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
        dateDebut: {
            type: "String"
        },
        dateDebutInt: {
            type: "String"
        },
        dateFin: {
            type: "String"
        },
        dateFinInt: {
            type: "String"
        },
        heuresNormale: {
            type: "Number",
            defaultsTo: 0
        },
        heuresNormaleSup: {
            type: "Number",
            defaultsTo: 0
        },
        heuresNuit: {
            type: "Number",
            defaultsTo: 0
        },
        heuresNuitSup: {
            type: "Number",
            defaultsTo: 0
        },
        montantHorraire: {
            type: "Number",
            defaultsTo: 0
        },
        ouvrier: {
            model: "Ouvrier"
        },
        chantier: {
            model: "Chantier"
        },
        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    },

};