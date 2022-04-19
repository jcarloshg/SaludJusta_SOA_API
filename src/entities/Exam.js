
class Exam {
    constructor({
        fechaHora = null,
        status = null,
        resultados = null,
        type = null,
        cost = null,
    }) {
        this.fechaHora = fechaHora;
        this.status = status;
        this.resultados = resultados;
        this.type = type;
        this.cost = cost;
    }
}

module.exports = Exam;