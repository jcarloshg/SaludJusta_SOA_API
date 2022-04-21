

const existAccount = require('./existAccount');
const createAccount = require('./createAccount');
const loggin = require("./loggin");

const CRUD = {
    existAccount,
    createAccount,
    loggin,
};

module.exports = CRUD;