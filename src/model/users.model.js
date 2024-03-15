const mongoose = require('mongoose');

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

module.exports = usersModel;
