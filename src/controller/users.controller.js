const usersModel = require('../model/users.model.js');
// traer el schema de la base de datos


class UsersController {
    constructor() {
    }

    async index(req,res) {
        usersModel.find().then(users => {
            return res.json(users);
        });
    }

    async getUserbyQueryParam(req, res){
        const { query } = req;
        usersModel.find(query).then(users => {
            return res.json(users);
        });
    }
/*
    async postManyUsers(req, res) {
        try {
            const newUser = new usersModel(req.body);
            await newUser.save();
            res.json({ message: 'Usuario guardado exitosamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al guardar el usuario' });
        }
    }
    */
}

module.exports = new UsersController();


