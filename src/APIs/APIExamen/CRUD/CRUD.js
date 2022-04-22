
const requestExamTypes = require("./requestExamTypes");
const createExam = require('./createExam');
const requestExamsToday = require('./requestExamsToday');
const requestExamsClientName = require('./requestExamsClientName');

const CRUD = {
    requestExamTypes,
    createExam,
    requestExamsToday,
    requestExamsClientName,
};

module.exports = CRUD;