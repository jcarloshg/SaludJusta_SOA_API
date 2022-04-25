
const requestExamTypes = require("./requestExamTypes");
const createExam = require('./createExam');
const requestExamsToday = require('./requestExamsToday');
const requestExamsClientName = require('./requestExamsClientName');
const requestoInfoExamByID = require('./requestoInfoExamByID');

const CRUD = {
    requestExamTypes,
    createExam,
    requestExamsToday,
    requestExamsClientName,
    requestoInfoExamByID
};

module.exports = CRUD;