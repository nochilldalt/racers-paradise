import { Query } from '../index';
import { TUsers } from '../tables';

const findEmail = (email: string) => Query<TUsers[]>('SELECT * FROM users WHERE email = ?', [email]);

export default {
	findEmail
};
