module.exports = {


    friendlyName: 'Init',


    description: 'Init something.',


    inputs: {
        req: {
            type: 'ref',
        },
        res: {
            type: 'ref',
        },
    },


    exits: {

        success: {
            description: 'All done.',
        },

    },


    fn: async function(inputs) {
        // TODO
        var variables = {};
        if (!(inputs.req.session.hasOwnProperty('bassTransOuvrier'))) {
            return inputs.res.redirect("/login");
        } else {
            variables.user = inputs.req.session.bassTransOuvrier;
            variables.page = {
                title: "",
                message: "",
                name: "Accueil"
            }
            return variables;
        }
    }
};