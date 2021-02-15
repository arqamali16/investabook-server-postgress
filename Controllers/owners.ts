import pool from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getAllOwners = (req: any, res: any) => {
	pool.query('SELECT * FROM owners', (err: any, dbRes: any) => {
		if (err) console.log('owners error', err);
		res.send(dbRes.rows);
		console.log(dbRes.rows);
	});
};

const addOwner = async (req: any, res: any) => {
	const { name, email, password } = req.body;
	// password hashing
	const hashedPassword = await bcrypt.hash(password, 12);
	pool.query(
		'INSERT INTO owners(name,email,password) VALUES($1, $2,$3)',
		[name, email, hashedPassword],
		(err: any, dbRes: any) => {
			if (err) console.log('owners error', err);
			else res.send('owner added');
		},
	);
};

const getOwnersDetail = (req: any, res: any) => {
	// const hashedPassword = bcrypt.hashSync(req.body.password, 8);
	// const token = jwt.sign({ id: 1234 }, 'secret', {
	// 	expiresIn: 86400, // expires in 24 hours
	// });
	// res.status(200).send({ auth: true, token });
};

const updateOwner = (req: any, res: any) => {
	// const { id } = req.params;
	// const { name, email, password } = req.body;
	// pool.query(
	// 	'UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4',
	// 	[name, email, password, id],
	// 	(err, dbRes) => {
	// 		if (err) res.send(err);
	// 		res.send('Details updated succesfully!');
	// 	},
	// );
};

const deletOwner = () => {};

export default { getAllOwners, addOwner, getOwnersDetail, updateOwner, deletOwner };
