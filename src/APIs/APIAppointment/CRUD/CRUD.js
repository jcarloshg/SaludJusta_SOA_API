
const getAvailableHoursDay = require('./getAvailableHoursDay');
const updateAppointment = require('./updateAppointment');
const requestAppointmentsDay = require('./requestAppointmentsDay');
const markAppointmentAsProgress = require('./markAppointmentAsProgress');

const CRUD = {
    getAvailableHoursDay,
    updateAppointment,
    requestAppointmentsDay,
    markAppointmentAsProgress,
};

module.exports = CRUD;