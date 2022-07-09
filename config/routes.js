/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/login': { action: 'login' },
    'GET /': { action: 'accueil' },
    '/ouvrier': { action: 'ouvrier/main' },
    '/ouvrier/details/:idouvrier': { action: 'ouvrier/details' },
    '/ouvrier/edit/:idouvrier': { action: 'ouvrier/edit' },
    '/chantier': { action: 'chantier/main' },
    '/api/changestatus': { action: 'api/changestatus' },
    '/api/changeouvrierstatus': { action: 'api/changeouvrierstatus' },
    '/api/pointageouvriers': { action: 'api/pointageouvriers' },
    'POST /api/pointage': { action: 'api/pointage' },
    'POST /api/affectation': { action: 'api/affectation' },
    'POST /api/deletepointage': { action: 'api/deletepointage' },
    '/chantier/details/:idchantier': { action: 'chantier/details' },
    '/pointage': { action: 'pointage/pointage' },
    '/pointage/chantier/:idchantier': { action: 'pointage/chantier' },
    '/pointages': { action: 'pointage/pointages' },
    '/paye': { action: 'paye/main' },
    '/paye/bulletin/:ouvrier/:du/:au': { action: 'paye/bulletin' },


    'GET /apilastpointage/:idequipe': { action: 'apilastpointage' },
    '/equipes': { action: 'equipes' },
    '/equipe/details/:idequipe': { action: 'managequipe' },
    'GET /apipointage/:idequipe': { action: 'apipointage' },
    'POST /apipointagemark': { action: 'apipointagemark' },

    'GET /etats': { action: 'etats/main' },
    'POST /etats/bilan': { action: 'etats/bilan' },





    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/


};