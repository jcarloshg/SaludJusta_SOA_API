const { Router } = require("express");
const examenController = require("./controller/examenController");

const apiExamRouter = Router();


// * POST endpoints

apiExamRouter.post('/create_exam', examenController.create_exam);


// * GET endpoints

apiExamRouter.get('/', (request, response) => response.status(200).json({ message: "API EXAM from SaludJusta project" }));

apiExamRouter.get('/request_exam_types', examenController.requestExamTypes);


// * PUT endpoints


// * DELETE endpoints

module.exports = apiExamRouter;