/**
 * @author Mohammed Arqam Ali Saad<arqam.ali16@gmail.com>
 * @description Model User
 */

import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export default mongoose.model("User", user);
