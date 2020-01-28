import * as express from 'express'
import * as passport from 'passport'

const router = express.Router();

router.use((req, res, next)=>{
    passport.authenticate('bearer', (error, user)=> {
        if(user){
            req.user=user
        }
        return next()
    })(req, res, next)
})


export default router
