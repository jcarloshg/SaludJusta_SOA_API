
const getAvailableHoursDay = require('./getAvailableHoursDay');
const updateAppointment = require('./updateAppointment');
const requestAppointmentsDay = require('./requestAppointmentsDay');
const markAppointmentAsProgress = require('./markAppointmentAsProgress');
const searchAppointmentsByClientName = require('./searchAppointmentsByClientName');
const markAppointmentAsComplete = require('./markAppointmentAsComplete');
const createAppointment = require('./createAppointment');

const CRUD = {
    getAvailableHoursDay,
    updateAppointment,
    requestAppointmentsDay,
    markAppointmentAsProgress,
    searchAppointmentsByClientName,
    markAppointmentAsComplete,
    createAppointment
};

module.exports = CRUD;