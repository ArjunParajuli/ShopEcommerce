- Authentication and authorization: using access token for this (Access tokens are a type of credential used in authentication systems, these tokens are typically used to grant access to resources)
- Anything which is configurable or can be changed, we put it inside a config folder.


- Define the Structure:
    - Router (routing)
    - Controller (logic part)
    - Model (interaction with db) 
    firstly work on models, then controllers and then routes

Dependencies for the project:
- Mongoose
- Express
- JWT(JSON Web Tokens): access token
- bcrypt.js: JavaScript library used for hashing passwords using the bcrypt algorithm(encrypting data).


## Steps followed:-
    i. Creating Models:
    - create user model: Two types of users, admin and customer. Creation of customer through APIs and creation of Admin must be internally.
    - creating admin user: Whenever server starts, check if there exists an admin user, if not then Create an admin user at the starting of the application using mongoose.
