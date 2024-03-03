const mongoose = require('mongoose');

/* 
user schema consists of:
 name
 userld
 password
 email
 userType
*/

// creating user schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        minLength: 10
    },
    userType:{
        type: String,
        required: true,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]   // userType can be either customer or admin
    }
}, {timestamps:true, versionKey:false})

// creates a collection named "Users" on db
module.exports = mongoose.model("User", userSchema);