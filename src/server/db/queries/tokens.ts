import { Query } from '../index';
import { TTokens, ObjResponse } from '../tables';

const insert = (user_id: number) => Query<ObjResponse>('INSERT INTO tokens (user_id) VALUE (?)', [[user_id]]);

const match = (token: string, user_id: number, token_id: number, unique: string) =>
	Query<TTokens[]>('SELECT * FROM tokens WHERE val = ? AND user_id = ? AND uniq = ? AND id = ?', [token, user_id, unique, token_id]);

const update = (token: string, token_id: number, unique: string) =>
	Query<ObjResponse>('UPDATE tokens SET token = ?, uniq = ? WHERE id = ?', [token, unique, token_id]);

export default {
	insert,
	update,
	match
}
