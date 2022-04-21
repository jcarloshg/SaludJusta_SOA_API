const { Router } = require("express");

const apiAppointmentRoutes = Router();

// POST endpoints


// GET endpoints
apiAppointmentRoutes.get('/', (request, response) => response.status(200).json({ message: "API Appointment  from SaludJusta project" }));

// PUT endpoints


// DELETE endpoints


module.exports = apiAppointmentRoutes;