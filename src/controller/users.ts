/**
 * @author Mohammed Arqam Ali Saad<arqam.ali16@gmail.com>
 * @description All the Controller for Users
 */

import _ from "lodash";

import User from "../models/users";
import HttpError from "../models/error";

const createUser = async (req: any, res: any, next: any) => {
  const createdUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const result = await createdUser.save();
    res.json(result);
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
