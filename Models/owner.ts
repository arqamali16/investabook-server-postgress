import pool from '../db';

class Owner {
	name: string;
	email: any;
	password: any;

	constructor(name?: any, email?: string, password?: string) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	add = async (response: any) => {
		pool.query(
			'INSERT INTO owners(name,email,password) VALUES($1, $2,$3)',
			[this.name, this.email, this.password],
			(err: any, dbRes: any) => {
				if (err) response.send({ status: false, message: err });
				else response.send({ status: true, message: 'Owner Added' });
			},
		);
	};

	edit = (ownerId: any, response: any) => {
		pool.query(
			'UPDATE owners SET name = $1, email = $2 WHERE owner_id = $3',
			[this.name, this.email, ownerId],
			(err: any, dbRes: any) => {
				if (err) response.send({ status: false, message: err });
				else response.send({ status: true, message: 'Owner Edited!' });
			},
		);
	};

	delete = (id: any, response: any) => {
		pool.query('DELETE FROM owners WHERE owner_id = $1', [id], (err: any, dbRes: any) => {
			if (err) response.send({ status: false, message: err });
			else response.send({ status: true, message: 'Owner deleted!' });
		});
	};

	getAll = (response: any) => {
		pool.query('SELECT * FROM owners', (err: any, dbRes: any) => {
			if (err) response.send({ status: false, message: err });
			return response.send(dbRes.rows);
		});
	};

	getOwnerById = (id: any, response: any) => {
		pool.query('SELECT * FROM owners WHERE owner_id = $1', [id], (err: any, dbRes: any) => {
			if (err) response.send({ status: false, message: err });
			else response.send(dbRes.rows);
		});
	};

	// getOwnerByEmail = (email: string, name) => {
	// 	pool.query('SELECT * FROM users WHERE id = $1', [name], (err: any, dbRes: any) => {
	// 		if (err) console.log('owners error', err);
	// 		else res.send('owner added');
	// 	});
	// };
}

export default Owner;
