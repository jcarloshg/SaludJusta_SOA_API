
const requestExamTypes = require("./requestExamTypes");
const createExam = require('./createExam');
const requestExamsToday = require('./requestExamsToday');
const requestExamsClientName = require('./requestExamsClientName');
const requestoInfoExamByID = require('./requestoInfoExamByID');
const recordResults = require('./recordResults');

const CRUD = {
    requestExamTypes,
    createExam,
    requestExamsToday,
    requestExamsClientName,
    requestoInfoExamByID,
    recordResults
};

module.exports = CRUD;