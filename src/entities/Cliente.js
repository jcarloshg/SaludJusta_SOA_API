
const User = require("./User");

class Cliente extends User {

    constructor({
        name,
        lastName,
        gender,
        rol = "Cliente",
        phoneNumber,
        email,
        password, }) {
        super({
            name,
            lastName,
            gender,
            rol,
            phoneNumber,
            email,
            password,
        })
    }

}

module.exports = Cliente;

// const Cliente = {
//     name: null,
//     lastName: null,
//     numberPhone: null,
//     email: null,
// };

// /**
//  *
//  * @param {Cliente} cliente
//  * @returns {Cliente} Cliente
//  */
// const cliente = (cliente) => {

//     let newCliente = { ...Cliente };

//     for (const key in cliente) {
//         if (Object.hasOwnProperty.call(cliente, key)) {
//             newCliente[key] = cliente[key];
//         }
//     }

//     return newCliente;
// }
