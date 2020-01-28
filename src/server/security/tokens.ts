import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import db from '../db';
import config from "../config";

export const createToken = async (payload: IPayload) => {
	try {
		let result = await db.tokens.insert(payload.userid);
		payload.tokenid = result.insertId;
		payload.unique = crypto.randomBytes(32).toString("hex");
		let token = await jwt.sign(payload, config.secret);
		await db.tokens.update(token, payload.tokenid, payload.unique);
		return token;
	} catch (error) {
		console.log(error);
	}
};

export const validateToken = async (token: string) => {
	try {
		let payload: IPayload = <IPayload>jwt.verify(token, config.secret);
		let [matchedToken] = await db.tokens.match(token, payload.userid, payload.tokenid, payload.unique);
		if (matchedToken) {
			return payload;
		} else {
			return new Error('INVALIED TOKEN');
		}
	} catch (error) {
		console.log(error);
	}
};

export interface IPayload {
	userid: number;
	tokenid?: number;
	unique?: string;
}
