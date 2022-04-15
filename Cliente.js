
const Cliente = {
    name: null,
    lastName: null,
    numberPhone: null,
    email: null,
};

/**
 *
 * @param {Cliente} cliente
 * @returns {Cliente} Cliente
 */
const cliente = (cliente) => {

    let newCliente = { ...Cliente };

    for (const key in cliente) {
        if (Object.hasOwnProperty.call(cliente, key)) {
            newCliente[key] = cliente[key];
        }
    }

    return newCliente;
}

module.exports = cliente;