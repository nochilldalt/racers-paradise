import { Query } from '../index';
import { TUsers, ObjResponse} from '../tables';

const findEmail = (email: string) => Query<TUsers[]>('SELECT * FROM users WHERE email = ?', [email]);

<<<<<<< HEAD
const register = (user:any) => Query<ObjResponse>("INSERT INTO users SET ?",user)

export default {
    findEmail,
    register
=======
const findId = (id: number) => Query<TUsers[]>('SELECT * FROM users WHERE id = ?', [id]);

export default {
	findEmail,
	findId
>>>>>>> b3b110d92da0077d6326fcba35d3c1c2e43971b2
};
