import { Query } from '../index';
import { TUsers } from '../tables';

const findEmail = (email: string) => Query<TUsers[]>('SELECT * FROM users WHERE email = ?', [email]);

const findId = (id: number) => Query<TUsers[]>('SELECT * FROM users WHERE id = ?', [id]);

export default {
	findEmail,
	findId
};
