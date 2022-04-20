const { Router } = require("express");

const apiAccountRuter = Router();

const controller = require('./controller/controller')


// * POST endpoints

// apiAccountRuter.get('/existAccount', controller.loggin);


// * GET endpoints

apiAccountRuter.get('/existAccount', controller.existAccount);


// * PUT endpoints




// * DELETE endpoints



module.exports = apiAccountRuter;