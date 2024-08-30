class UserDTO {
    constructor ({id, username, email, password_hash, created_at, updated_at, role}) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password_hash = password_hash;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.role = role;
    }

    static fromData(data) {
        return new UserDTO ({
            id: data.id, 
            username: data.username,
            email: data.email,
            password_hash: data.password_hash,
            created_at: data.created_at,
            updated_at: data.updated_at,
            role: data.role
        });
    }


}

module.exports = UserDTO;