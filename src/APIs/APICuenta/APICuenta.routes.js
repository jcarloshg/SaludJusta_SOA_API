const { Router } = require("express");

const apiAccountRuter = Router();

const controller = require('./controller/controller')


// * POST endpoints
apiAccountRuter.post('/createAccount', controller.createAccount);


// * GET endpoints
apiAccountRuter.get('/existAccount', controller.existAccount);
apiAccountRuter.get('/loggin', controller.loggin);


// * PUT endpoints


// * DELETE endpoints


module.exports = apiAccountRuter;