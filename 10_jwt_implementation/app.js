import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import authRouter from './auth.js'; //importing the auth router from auth.js
import verifyToken from './middleware.js'; //importing the verifyToken middleware from middleware.js
import protectedRouter from './protected_routes.js'; //importing the protected router from protected_routes.js

import { swaggerUi, swaggerDocs } from './swagger.js'; // <<-- Burada import ettik


const app = express(); //creating a new express application

app.use(express.json()); //using the express.json middleware to parse JSON data in the request body


// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// normal routes

app.use("/auth", authRouter); //using the auth router for the /auth route

app.use(verifyToken); //using the verifyToken middleware for all routes after this line

app.use("/protected", protectedRouter); //using the protected router for the /protected route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
