// const userDAO = require('../dao/userDAO');
const UserDAO = require('../dao/userDAO');
const UserDTO = require('../dto/userDTO');
const bcrypt = require('bcrypt');

class UserService {

    async getUsers() {
        const users = await UserDAO.getUsers();
        return users.map(user => UserDTO.fromData(user));
    }

    async registerNewUser({ username, email, password }) {

        try {

            const emailExists = await UserDAO.getUserByEmail(email);
            const usernameExists = await UserDAO.getUserByUsername(username);

            console.log('emailExists:', emailExists); // Debugging line

            if (emailExists || usernameExists) {

                const error = new Error('User already exists');
                error.statusCode = 409;
                throw error;
            }

            const newUser = await UserDAO.registerNewUser({
                
                username,
                email,
                password_hash: (await this.hashPassword(password)).toString(),
                role: 'member'

            });

            return UserDTO.fromData(newUser);


        } catch (error) {

            if(!error.statusCode) {
                error.statusCode = 500;
            }
            
            // throw new Error('Unable to register user: ' + error);
            throw error;
        }
    }

    async hashPassword(password) {
        const saltRounds = 10;
        try {

            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;

        }
        catch (error) {
            console.error('Error hashing password')
            throw error;
        }
    }
}

module.exports = new UserService();