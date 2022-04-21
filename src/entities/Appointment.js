
class Appointment {
    constructor({
        idAppointment = null,
        date = null,
        time = null,
        status = 'NO ASIGNADA',
        FK_Exam = null,
        FK_ExamCatalog = null,
        FK_UserClient = null
    }) {
        this.idAppointment = idAppointment;
        this.date = date;
        this.time = time;
        this.status = status;
        this.FK_Exam = FK_Exam;
        this.FK_ExamCatalog = FK_ExamCatalog;
        this.FK_UserClient = FK_UserClient;
    }
}

module.exports = Appointment;