import express from "express";

import authController from "../controller/auth";
import User from '../models/users'

const authRouter = express.Router();

authRouter.get("/", authController.authorise, (req:any, res:any)=>{
        // can do proceedings like return logged in user details
        try {
            const user = User.findById(req.user.id).select('-password')
            res.json(user)
        }catch(err){
            res.status(401).send('server error')
        }
});

export default authRouter;