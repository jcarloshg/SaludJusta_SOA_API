
class ExamCatalogItem {
    constructor({
        id = null,
        typeExam = null,
        cost = null,
    }) {
        this.id = id;
        this.typeExam = typeExam;
        this.cost = cost;
    }
}

module.exports = ExamCatalogItem;