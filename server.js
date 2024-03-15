const express = require('express');
const mongoose = require('mongoose');

const url = "mongodb+srv://patoasesino69:DVnolMGIPsiKJypZ@elclustersito68.jrgaxcl.mongodb.net/test";
const app = express();
mongoose.connect(url);

const schema = new mongoose.Schema(
    {
        id : Number,
        first_name : String,
        last_name : String,
        email :String,
        gender :String,
        ip_address :String,
        language :String,
        university :String,
        linkedin_skills :String
    }
    );

const usersModel = mongoose.model("users", schema);

app.get('/users', (req, res) => {
    usersModel.find({}).then(users => {
        res.json(users);
    }).catch(err => {console.log(err);});
});

app.post('/users', async  (req, res) => {

    try {
        const newUser = new UserModel({ name, age });
        await newUser.save();
        res.json({ message: 'Usuario guardado exitosamente' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el usuario' });
      }

});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});


