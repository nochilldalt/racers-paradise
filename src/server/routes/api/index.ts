import * as express from 'express'
import * as passport from 'passport'
import postroutes from "./posts"
import vehiclesroutes from "./vehicles"

const router = express.Router();

router.use((req, res, next)=>{
    passport.authenticate('bearer', (error, user)=> {
        if(user){
            req.user=user
        }
        return next()
    })(req, res, next)
})

router.use("/posts", postroutes)
router.use("/vehicles", vehiclesroutes)


export default router
