/**
 * @author Mohammed Arqam Ali Saad<arqam.ali16@gmail.com>
 * @description App for handling DB connection and routings
 */

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


import usersRoutes from "./routes/users-routes";
import authRoutes from './routes/auth'


const app = express();
const port = 5000;
const url =
  "mongodb+srv://arqamali:KUYAZkEHHaN63AqD@cluster0-zqivj.mongodb.net/rentCollection?retryWrites=true&w=majority";

app.use(bodyParser.json());

app.use("/api/users", usersRoutes);
app.use("/api/auth",authRoutes)

app.use((error: any, req: any, res: any, next: any) => {
  if (error.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error Occurred" });
});

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB and Listening at PORT:${port}`);
    });
  })
  .catch(() => {
    console.log("Connection to DB Failed");
  });
