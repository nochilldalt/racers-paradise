import { RequestHandler } from "express";
import db from "../db";

 const registerUser: RequestHandler = async (req, res, next) => {
  let [user] = await db.users.findEmail(req.body.email);
  if (user && user.email === req.body.email) {
    res.status(400).json("username or email already exists");
  } else {
      next()
  }
};

export default{
    registerUser
}