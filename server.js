// This is the starting file of our project

const express = require('express');
const mongoose = require('mongoose');
const server_config = require('./configs/server.config')
const db_config = require('./configs/db.config')
const user_model = require('./models/user.model')
const bcrypt = require('bcryptjs')


// connect to MongoDB
mongoose.connect(db_config.DB_URL); // specifies the location of the MongoDB server and the name of the database to connect to.
const db = mongoose.connection;  // start the connection

db.on('error', ()=>{
    console.log("Error Connecting to the database")
})

// when connection successful, open event is thrown
db.once('open', ()=>{
    console.log("Connectoin to database successful.")
    init(); // after connected to db, create an admin user 
})

// check and create admin
async function init(){
    let user = await user_model.findOne({userId: 'admin'});

    if(user){
        console.log("Admin already present")
        console.log(user);
        return;
    }

    // if admin not present
    try{
        user = await user_model.create({
            name: "Arjun",
            userId: "admin",
            email: "parajuliarjun54@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync('admin@123', 8)  // encrypting pw(salt round factor:-number that determines complexity of the hashing algorithm)
        })
        console.log("Admin Created Successfully");
        console.log(user);
    }catch(err){
        console.log("Error while creating admin", err);
    }
}


// start the server
const app = express(); // express is a function
app.listen(server_config.PORT, ()=>{
    console.log("Server started at : "+server_config.PORT)
})

// Whenever server starts, check if there exists an admin user, if not then Create an admin user at the starting of the application
