
const getAvailableHoursDay = require('./getAvailableHoursDay');
const updateAppointment = require('./updateAppointment');
const requestAppointmentsDay = require('./requestAppointmentsDay');

const CRUD = {
    getAvailableHoursDay,
    updateAppointment,
    requestAppointmentsDay,
};

module.exports = CRUD;