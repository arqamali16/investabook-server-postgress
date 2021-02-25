import pool from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { config } from '../config';

const login = async (req: any, res: any) => {
	const { name, email, password } = req.body;
	pool.query('SELECT * FROM owners WHERE email = $1', [email], async (err: any, dbRes: any) => {
		if (err) res.status(404).send({ status: false, message: err });
		if (_.isEmpty(dbRes.rows)) res.status(404).send({ status: false, message: 'No user found' });
		else {
			const isMatched = await bcrypt.compare(password, _.get(_.first(dbRes.rows), 'password'));
			if (isMatched) {
				var token = jwt.sign({ id: 'user id from db' }, config.secret, {
					expiresIn: 3600, // expires in 24 hours
				});
				res.status(200).send({ auth: true, token: token, userDetails: _.first(dbRes.rows) });
			} else {
				res.status(200).send({ status: false, message: 'password did not match' });
			}
		}
	});
};

export default { login };
