/**
 * @author Mohammed Arqam Ali Saad<arqam.ali16@gmail.com>
 * @description All the Controller for Users
 */

import _ from "lodash";

import User from "../models/users";
import HttpError from "../models/error";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretToken = '123@abcd'

const createUser = async (req: any, res: any, next: any) => {
  const createdUser:any = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Salt is used to rounds to decide the power of password
  const salt = await bcrypt.genSalt(10)

  // Hash is created (Encription)
  createdUser.password  =  await bcrypt.hash(req.body.password,salt)


  try {
    const result = await createdUser.save();

    const payload = {user:{id:createdUser.id}}

    // setting a token which expires in an hour
    jwt.sign(payload,secretToken,{ expiresIn:3600 },(err, token)=>{
      if(err)throw err
      res.json({...result, token });
    })


  } catch (err) {
    const error = new HttpError("Error in creating user", 404);
    return next(error);
  }
};

const getUsers = async (req: any, res: any, next: any) => {
  const allUsers = await User.find().exec();
  if (_.isEmpty(allUsers)) {
    const error = new HttpError("Could not find the User", 404);
    return next(error);
  }
  res.json(allUsers);
};

export default { createUser, getUsers };
