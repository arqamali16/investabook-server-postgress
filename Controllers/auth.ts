import pool from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const login = async (req: any, res: any) => {
	const { name, email, password } = req.body;
	// password hashing
	const hashedPassword = await bcrypt.hash(password, 12);

	// 	  var token = req.headers['x-access-token'];
	//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	//   jwt.verify(token, config.secret, function(err, decoded) {
	//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

	// var passwordIsValid = bcrypt.compareSync(req.body.password, 'encrpted password from db');
	var token = jwt.sign({ id: 'user id from db' }, config.secret, {
		expiresIn: 86400, // expires in 24 hours
	});
	res.status(200).send({ auth: true, token: token });
};

export default { login };
