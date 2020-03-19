import * as express from 'express';
import * as passport from 'passport'
import logger from '../../utils/logger';
import { createToken } from '../../security/tokens';

const router = express.Router();

router.post('/', passport.authenticate('local') ,async(req:any, res) =>{
    try {
        logger.info(`User ${req.user.id} authenticated`);
        let token = await createToken({userid:req.user.id})
        res.json({
            token,
            userid: req.user.id,
            role: req.user.role
        })
    } catch (error) {
        logger.error(error)
        res.status(500).json("My Code Sucks Let Me Know ");
    }
})

export default router;