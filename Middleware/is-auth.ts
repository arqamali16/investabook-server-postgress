import jwt from 'jsonwebtoken';
import { config } from '../config';

const isAuth = (req: any, res: any, next: any) => {
	var token = req.headers['x-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, config.secret, (err: any, decoded: any) => {
		if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
	});
	next();
};

export default isAuth;
