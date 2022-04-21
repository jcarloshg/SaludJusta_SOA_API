
class Appointment {
    constructor({
        id = 29,
        dateTime = "2022-04-21T15=00=00.000Z",
        status = 'NO ASIGNADA',
        FK_Exam = null,
        FK_ExamCatalog = 5,
        FK_UserClient = null
    }) {
        this.id = id;
        this.dateTime = dateTime;
        this.status = status;
        this.FK_Exam = FK_Exam;
        this.FK_ExamCatalog = FK_ExamCatalog;
        this.FK_UserClient = FK_UserClient;
    }
}

module.exports = Appointment;