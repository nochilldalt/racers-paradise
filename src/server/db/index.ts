import * as mysql from 'mysql';
import logger from '../utils/logger';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
	const sql = mysql.format(query, values);

	logger.silly('Executing Query');
	logger.silly(sql);

	return new Promise<T>((resolve, reject) => {
		pool.query(sql, (err, result) => {
			if (err) {
				logger.warn('Query Failed');
				return reject(err);
			} else {
				return resolve(result);
			}
		});
	});
};

import users from './queries/users';
import tokens from './queries/tokens';
import posts from './queries/posts';
import vehicles from './queries/vehicles';
import { loggers } from 'winston';
export default {
	users,
	tokens,
	posts,
	vehicles
};
