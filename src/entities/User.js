
class User {

    constructor({
        id = null,
        name = null,
        lastName = null,
        phoneNumber = null,
        gender = null,
        email = null,
        password = null,
        role = null,
    }) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getRol = () => this.rol;


    /**
     * check if any property is null, NOTE this method not check [id]
     * @returns
     */
    isPropertiesNull() {
        if (!this.name || !this.lastName || !this.phoneNumber || !this.gender || !this.email || !this.password || !this.role) {
            return true;
        }
        return false;
    }

}

module.exports = User;