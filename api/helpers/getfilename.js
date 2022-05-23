module.exports = {


    friendlyName: 'Getfilename',


    description: 'Getfilename something.',


    inputs: {

    },


    exits: {

        success: {
            description: 'All done.',
        },

    },


    fn: async function(inputs) {
        var nomFile = new Date().getTime();
        nomFile = parseInt(nomFile);

        let cle = "£72àx]]#~@è<&+03I0u72àx]]#~@è<&_éé->672àx]]#~@è<&";
        var codeCle = 0;
        var codeData = 0;

        for (i = 0; i < cle.length; i++) {
            codeCle = codeCle + parseInt(cle.charCodeAt(i)) + 1994;
        }

        codeCle = codeCle * nomFile;
        nomFile += codeCle
        codeData = nomFile.toString(28);

        return codeData + codeCle;
        // TODO
    }


};