import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as passport from 'passport';
import * as helmet from 'helmet';
import * as compression from 'compression';
import routes from './routes';
import logger from './utils/logger';

import './middlewares/localstrategy';
import './middlewares/bearerstrategy';

const morganStream = {
	write: (text: string) => {
		logger.info(text);
	}
};

const app = express();

//sauce for server security
app.use(helmet());

//sauce for using gzip format to make your request/response smaller
app.use(compression());

app.use(morgan('dev', { stream: morganStream }));

//health checkpoints
app.get('/status', (req, res) => res.status(200).end());
app.head('/status', (req, res) => res.status(200).end());

// shows the real origin IP in the heroku
app.enable('trust proxy');

app.use(express.static('public'));
app.use(passport.initialize());
app.use(express.json());
app.use(routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;

//logger is an async way of logging info :)
app.listen(port, () => logger.info('✌️ Sever Listening on Port 3000 ✌️'));

//examples of other types of logs!
logger.silly('Shit is funny');
logger.debug('Debug the shit');
logger.verbose('Big shit');
logger.info('What is this shit');
logger.warn('Shits may be goin down');
logger.error('Shits gone down');