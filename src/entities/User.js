

class User {

    constructor({
        name = null,
        lastName = null,
        gender = null,
        rol = null,
        phoneNumber = null,
        email = null,
        password = null
    }) {
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.rol = rol;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }

}

module.exports = User;