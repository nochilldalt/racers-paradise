import * as express from 'express';
import logger from '../../utils/logger'
import db from '../../db';
import { RequestHandler } from 'express';

const router = express.Router();
const isGuest: RequestHandler = (req: any, res, next) => {
	if (!req.user || req.user.role !== 'guest') {
		return res.sendStatus(401);
	} else {
		return next();
	}
};

const isPostOwner: RequestHandler = async (req: any, res, next) => {
	const posts: any = await db.posts.one(req.params.id);
	if (posts[0].userid === req.user.id) {
		return next();
	} else {
		return res.sendStatus(401);
	}
};

// router.get('/user', isGuest, async (req:any, res) => {
//   try {

//     let blogs = await db.posts.(req.user.id)
//     res.json(blogs)
//   } catch (error) {
//     logger.error(error);
//     res.status(500).json(" My code suck let me kno");
//   }
// })
router.get('/:id', async (req, res, next) => {
	try {
		const [post] = await db.posts.one(Number(req.params.id));
		res.json(post);
	} catch (error) {
		logger.error(error);
		res.status(500).json(' My code suck let me kno');
	}
});

router.get('/', async (req, res, next) => {
	try {
		const posts = await db.posts.all();
		res.json(posts);
	} catch (error) {
		logger.error(error);
		res.status(500).json(' My code suck let me kno');
	}
});

router.post('/', async (req, res, next) => {
	try {
		const result = await db.posts.post(req.body.user_id, req.body.title, req.body.image_url);
		res.json(result);
	} catch (error) {
		logger.error(error);
		res.status(500).json(' My code suck let me kno');
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const edit = await db.posts.edit(req.body.title, req.body.image_url, Number(req.params.id));
		res.json(edit);
	} catch (error) {
		logger.error(error);
		res.status(500).json(' My code suck let me kno');
	}
});

router.delete('/:id', async (req, res) => {
	const id = Number(req.params.id);
	try {
		// let removeTag = await db.blogtags.remove(id);
		let destroy = await db.posts.destroy(id);
		res.json({ destroy });
	} catch (error) {
		logger.error(error);
		res.status(500).json('My Code Sucks Let Me Know ');
	}
});

export default router;
