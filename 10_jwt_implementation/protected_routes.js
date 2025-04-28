import express  from "express";
import users_data from "./users_data.js";

const router=express.Router(); //creating a new router object

/**
 * @swagger
 * /protected/user_info:
 *   get:
 *     summary: Get user info (Protected Route)
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User info retrieved successfully
 *       401:
 *         description: Unauthorized - No token
 *       403:
 *         description: Forbidden - Invalid token
 */

router.get("/user_info", (req, res) => { //creating a new route for protected resource
    const id=req.id;
    const user=users_data.find(user=>user.id===id); //finding the user in the users array by id
    return res.status(200).json({message:"User info",user}); //sending a response with status 200 and a message

});

export default router; //exporting the router object