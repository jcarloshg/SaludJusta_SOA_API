
class User {

    constructor({
        id = null,
        name = null,
        lastName = null,
        phoneNumber = null,
        gender = null,
        emial = null,
        password = null,
        role = null,
    }) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.emial = emial;
        this.password = password;
        this.role = role;
    }

    getRol = () => this.rol;

}

module.exports = User;