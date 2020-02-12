import * as express from "express";
import { createToken } from "../../security/tokens";
import { hashPassword } from "../../security/passwords";
import db from "../../db";
import validators from '../../middlewares/validators'

const router = express.Router();

router.post("/", validators.registerUser,async (req: any, res) => {
  try {
      req.body.password = hashPassword(req.body.password);
      let result = await db.users.register(req.body);
      let token = await createToken({ userid: result.insertId });
      res.json({
        token,
        userid: result.insertId,
        role: "guest"
      });
  } catch (error) {
    console.log(error);
    res.status(500).json("My Code Sucks Let Me Know ");
  }
});

export default router;
