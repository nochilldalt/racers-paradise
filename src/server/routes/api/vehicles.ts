import * as express from "express";
import db from "../../db";
import { RequestHandler } from "express";

const router = express.Router();
const isGuest:RequestHandler = (req:any, res, next)=>{
  if (!req.user || req.user.role !=='guest') {
    return res.sendStatus(401)
  } else {
    return next()
  }
}

const isPostOwner:RequestHandler = async (req:any, res, next)=>{
    const vehicles: any = await db.vehicles.one(req.params.id);
  if (vehicles[0].userid === req.user.id) {
    return next()
  } else {
    return res.sendStatus(401)
  }
}

// router.get('/user', isGuest, async (req:any, res) => {
//   try {
//     let blogs = await db.posts.(req.user.id)
//     res.json(blogs)
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(" My code suck let me kno");
//   }
// })
router.get("/:id", async (req, res, nevt) => {
    const id = Number(req.params.id)
  try {
    const [vehicle] = await db.vehicles.one(id);
    res.json(vehicle);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.get("/",  async (req, res, next) => {
  try {
    const vehicles = await db.vehicles.all();
    res.json(vehicles);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});


router.post("/",async (req, res, next) => {
  try {
    const result = await db.vehicles.post(
      req.body.make,
      req.body.model,
      req.body.year,
      req.body.trim,
      req.body.description,
      req.body.user_id
    );
      res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.put("/:id", async (req, res, next) => {
    const id = Number(req.params.id)
  try {
    const edit = await db.vehicles.edit(
      req.body.make,
      req.body.model,
      req.body.year,
      req.body.trim, 
      req.body.description,
      id
    );
    res.json(edit);
  } catch (error) {
    console.log(error);
    res.status(500).json(" My code suck let me kno");
  }
});

router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id)    
    try {
    let destroy = await db.vehicles.destroy(id);
    res.json({destroy});
  } catch (error) {
    console.log(error);
    res.status(500).json("My Code Sucks Let Me Know ");
  }
});

export default router;