import express from 'express';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import users_data from './users_data.js'; //getting the users data from users.js

const router = express.Router(); //creating a new router object

/* const users = [
    { id: 1, name: 'John Doe', password: 'password123' },
    { id: 2, name: 'Jane Smith', password: 'mypassword' },
    { id: 3, name: 'Alice Johnson', password: 'alicepassword' },
    { id: 4, name: 'Bob Brown', password: 'bobpassword' }
]; */


//user registration route

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad Request
 */


router.post("/register", async (req, res) => {
    try{
        const {name,password}=req.body; //destructuring the name and password from the request body
        
        if(!name || !password){ //checking if name and password are provided
            return res.status(400).json({message:"Name and password are required"}); //sending a response with status 400 and a message
        }
        
        const hashedPassword = await bcrypt.hash(password, 10); //hashing the password using bcrypt
    //creating a new user object with id, name and hashed password
        const user={id:users_data.length+1,name,password:hashedPassword}; 
        users_data.push(user); //pushing the new user object to the users array
        res.status(201).json({message:"User registered successfully",user}); //sending a response with status 201 and a message
    }
    catch(err){
        console.error(err); //logging the error to the console
        res.status(500).json({message:"Registration failed"}); //sending a response with status 500 and a message
    }
})

//User login route

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login and returns JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid username or password
 */

router.post("/login", async (req, res) => {
    try{
        const {username,password}=req.body; //destructuring the username and password from the request body
        
        const user = users_data.find(user => user.name === username); //finding the user in the users array by username
        if (!user){
            return res.status(401).json({message:"Invalid username or password"}); //sending a response with status 401 and a message
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password); //comparing the password with the hashed password using bcrypt
        if (!passwordMatch){
            return res.status(401).json({message:"Invalid username or password"}); //sending a response with status 401 and a message
        }

        const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:"30s"}); //signing the token with user id and secret key
        res.status(200).json({message:"Login successful",token}); //sending a response with status 200 and a message
    }
    catch(err){
        console.error(err); //logging the error to the console
        res.status(500).json({message:"Login failed"}); //sending a response with status 500 and a message
    }
})

export default router; //exporting the router object

