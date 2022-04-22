const { Router } = require("express");
const examenController = require("./controller/examenController");

const apiExamRouter = Router();


// * POST endpoints

apiExamRouter.post('/createExam', examenController.createExam);


// * GET endpoints

apiExamRouter.get('/', (request, response) => response.status(200).json({ message: "API EXAM from SaludJusta project" }));

apiExamRouter.get('/request_exam_types', examenController.requestExamTypes);

apiExamRouter.get('/requestExamsToday', examenController.requestExamsToday);


// * PUT endpoints


// * DELETE endpoints

module.exports = apiExamRouter;