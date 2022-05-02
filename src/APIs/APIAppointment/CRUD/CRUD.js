
const getAvailableHoursDay = require('./getAvailableHoursDay');
const updateAppointment = require('./updateAppointment');
const requestAppointmentsDay = require('./requestAppointmentsDay');
const markAppointmentAsProgress = require('./markAppointmentAsProgress');
const searchAppointmentsByClientName = require('./searchAppointmentsByClientName');
const markAppointmentAsComplete = require('./markAppointmentAsComplete');

const CRUD = {
    getAvailableHoursDay,
    updateAppointment,
    requestAppointmentsDay,
    markAppointmentAsProgress,
    searchAppointmentsByClientName,
    markAppointmentAsComplete
};

module.exports = CRUD;