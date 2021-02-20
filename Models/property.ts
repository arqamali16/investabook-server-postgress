import pool from '../db';

class Property {
	name: string | undefined;
	address: string | undefined;
	owner_id: number | undefined;

	constructor(name?: string, address?: string, owner_id?: number) {
		this.name = name;
		this.address = address;
		this.owner_id = owner_id;
	}

	add = async (response: any) => {
		pool.query(
			'INSERT INTO properties(name,address,owner_id VALUES($1,$2,$3)',
			[this.name, this.address, this.owner_id],
			(err: any, dbRes: any) => {
				if (err) response.send({ status: false, message: err });
				else response.send({ status: true, message: 'Owner Added!' });
			},
		);
	};

	edit = (paymentId: any, response: any) => {
		pool.query(
			'UPDATE properties SET mode = $1, paid_on = $2, amount = $3, approved= $4, tenant_id = $5 WHERE payment_id = $6',
			[this.mode, this.paid_on, this.amount, this.approved, this.tenant_id, paymentId],
			(err: any, dbRes: any) => {
				if (err) response.send({ status: false, message: err });
				else response.send({ status: true, message: 'Payment Edited!' });
			},
		);
	};

	delete = (id: any, response: any) => {
		pool.query('DELETE FROM payments WHERE payment_id = $1', [id], (err: any, dbRes: any) => {
			if (err) response.send({ status: false, message: err });
			else response.send({ status: true, message: 'Payment deleted!' });
		});
	};

	getAll = (response: any) => {
		pool.query('SELECT * FROM payments', (err: any, dbRes: any) => {
			if (err) response.send({ status: false, message: err });
			return response.send(dbRes.rows);
		});
	};

	getPaymentById = (id: any, response: any) => {
		pool.query('SELECT * FROM payments WHERE payment_id = $1', [id], (err: any, dbRes: any) => {
			if (err) response.send({ status: false, message: err });
			else response.send(dbRes.rows);
		});
	};
}

export default Property;
