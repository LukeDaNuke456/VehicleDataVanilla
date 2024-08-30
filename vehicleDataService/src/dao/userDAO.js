const User = require('../models/users/user')

class UserDAO {
    
    async getUsers () {
        return await User.findAll();
    }

    async registerNewUser(newUser) {
        return await User.create(newUser);
    }

    async getUserByEmail(email) {
        return await User.findOne({where: {email}});
    }

    async getUserByUsername(username) {
        return await User.findOne({where: {username}});
    }
}

module.exports = new UserDAO;