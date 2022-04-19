const { Router } = require("express");
const examenController = require("./InterfaceAdapters/controllers/examenController");

const examRouter = Router();

// * GET endpoints

examRouter.get('/', (request, response) => response.status(200).json({ message: "API EXAM from SaludJusta project" }));

examRouter.get('/request_exam_types', examenController.requestExamTypes);



// * POST endpoints



// * PUT endpoints



// * DELETE endpoints

module.exports = examRouter;