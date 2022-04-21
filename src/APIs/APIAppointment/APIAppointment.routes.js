const { Router } = require("express");
const controller = require("./controller/controller");

const apiAppointmentRoutes = Router();

// POST endpoints


// GET endpoints

apiAppointmentRoutes.get('/', (request, response) => response.status(200).json({ message: "API Appointment  from SaludJusta project" }));

apiAppointmentRoutes.get('/getAvailableHoursDay', controller.getAvailableHoursDay);



// PUT endpoints

apiAppointmentRoutes.put('/createAppointment', controller.createAppointment);

// DELETE endpoints


module.exports = apiAppointmentRoutes;