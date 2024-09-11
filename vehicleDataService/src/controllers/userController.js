const users = require('../models/users/user');
const UserService = require('../services/userService');

class UserController {

    async getUsers(req, res) {
        try {
            const users = await UserService.getUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async registerNewUser(req, res) {

        const { username, email, password } = req.body;

        try {
            const user = await UserService.registerNewUser({
                username,
                email,
                password,
            });

            res.status(201).json({
                message: "User successfully created",
                user,
            });
        } catch (error) {
            res.status(error.statusCode || 500).json({ error: error.message });
        }
    }

    async loginUser(req, res) {

        try {

            const { username, password } = req.body;

            const user = await UserService.login({
                username,
                password,
            });

            res.status(201).json({
                message: "User successfully logged in",
                user,
            });

        }

        catch (error) {

            res.status(error.statusCode || 500).json({ error: error.message });

        }

    }

}

module.exports = new UserController();