import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		pool.query(query, values, (err, result) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(result);
			}
		});
	});
};

import users from './queries/users';
import tokens from './queries/tokens';
export default {
	users,
	tokens
};
