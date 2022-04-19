
class Examen {
    constructor({
        fechaHora = null,
        status = null,
        resultados = null,
        type = null,
    }) {
        this.fechaHora = fechaHora;
        this.status = status;
        this.resultados = resultados;
        this.type = type;
    }
}

module.exports = Examen;