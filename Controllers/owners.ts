import pool from '../db';
import bcrypt from 'bcrypt';
import Owner from '../Models/owner';

const getAllOwners = (req: any, res: any) => {
	const owner = new Owner();
	owner.getAll(res);
};

const addOwner = async (req: any, res: any) => {
	const { name, email, password } = req.body;
	let hashPassword = bcrypt.hashSync(password, 12);
	const owner = new Owner(name, email, hashPassword);
	owner.add(res);
};

const getOwnersDetailById = (req: any, res: any) => {
	const { id } = req.params;
	const owner = new Owner();
	owner.getOwnerById(id, res);
};

// const getOwnersDetailByEmail = (req: any, res: any) => {
// };

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

const deletOwner = (req: any, res: any) => {
	const { id } = req.params;
	const owner = new Owner();
	owner.delete(id, res);
};

export default { getAllOwners, addOwner, getOwnersDetailById, updateOwner, deletOwner };
