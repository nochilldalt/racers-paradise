import { Query } from '../index';
import { TUsers, ObjResponse} from '../tables';

const findEmail = (email: string) => Query<TUsers[]>('SELECT * FROM users WHERE email = ?', [email]);

const register = (user:any) => Query<ObjResponse>("INSERT INTO users SET ?",user)

const findId = (id: number) => Query<TUsers[]>('SELECT * FROM users WHERE id = ?', [id]);

export default {
    findEmail,
    register,
    findId
}


