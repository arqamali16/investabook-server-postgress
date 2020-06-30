/**
 * @author Mohammed Arqam Ali Saad<arqam.ali16@gmail.com>
 * @description Routes for Users
 */

import express from "express";

import UserControllers from "../controller/users";

const userRouter = express.Router();

userRouter.post("/", UserControllers.createUser);
userRouter.get("/", UserControllers.getUsers);

export default userRouter;
