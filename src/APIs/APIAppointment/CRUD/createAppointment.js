
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");
const getRangeTime = require("../../../utils/date/getRangeTime");
const getWorkDays = require("../../../utils/date/getWorkDays");

const createAppointment = async (connection, data) => {

    try {

        let appointmentsNoAsignadas = [];
        let querys = [];

        const workDaysArr = getWorkDays(new Date("2022-05-13"), new Date("2022-05-20"));

        workDaysArr.forEach(day => {
            const dateISO = day.toISOString().split("T")[0];
            const rangeTimeArry = getRangeTime(
                new Date(`${dateISO}T07:00:00Z`),
                new Date(`${dateISO}T17:00:00Z`),
            );

            console.log(day);

            appointmentsNoAsignadas = appointmentsNoAsignadas.concat(rangeTimeArry);
        });

        appointmentsNoAsignadas.forEach(appoint => {

            const [date, time] = appoint.toISOString().split("T");

            const dateISO = date;
            const timeISO = time.substr(0, time.length - 1);

            // INSERT POR ID DE CATALOGO EXAMEN
            let idCatalog = Math.floor(1 + Math.random() * 6);
            const query = `INSERT INTO Appointment (date,time,status, FK_ExamCatalog) values ('${dateISO}', '${timeISO}', "NO ASIGNADA", ${idCatalog});`;

            querys.push(query);
        });


        querys.forEach(async query => await conectionQuery(connection, query));

        return "OK";

    } catch (error) {
        console.log(error);
        return error;

    }
}


module.exports = createAppointment;