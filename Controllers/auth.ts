import pool from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const login = async (req: any, res: any) => {
	const { name, email, password } = req.body;
	// password hashing
	const hashedPassword = await bcrypt.hash(password, 12);
	var token = jwt.sign({ id: 'user id from db' }, config.secret, {
		expiresIn: 86400, // expires in 24 hours
	});
	res.status(200).send({ auth: true, token: token });
};

export default { login };
