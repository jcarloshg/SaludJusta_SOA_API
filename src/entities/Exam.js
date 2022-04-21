
class Exam {

    // idExam int auto_increment primary key not null,
    // results VARCHAR(45),
    // FK_ExamCatalog int not null

    constructor({
        idExam = null,
        results = null,
        FK_ExamCatalog = null,
    }) {
        this.idExam = idExam;
        this.results = results;
        this.FK_ExamCatalog = FK_ExamCatalog;
    }
}

module.exports = Exam;