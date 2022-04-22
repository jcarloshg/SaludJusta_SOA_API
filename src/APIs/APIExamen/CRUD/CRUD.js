
const requestExamTypes = require("./requestExamTypes");
const createExam = require('./createExam');
const requestExamsToday = require('./requestExamsToday');

const CRUD = {
    requestExamTypes,
    createExam,
    requestExamsToday,
};

module.exports = CRUD;