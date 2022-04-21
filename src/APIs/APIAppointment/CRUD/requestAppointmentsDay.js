const { DATE } = require("mysql/lib/protocol/constants/types");



const requestAppointmentsDay = async (connection, data) => {

    const today = new Date();

    console.log(`[today] -> `, today);

    return await "requestAppointmentsDay is Ok";

}

module.exports = requestAppointmentsDay;