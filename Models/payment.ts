import pool from '../db';

class Payment {
	mode: string | undefined;
	paid_on: string | undefined;
	amount: number | undefined;
	approved: boolean | undefined;
	tenant_id: string | undefined;

	constructor(mode?: string, paid_on?: string, amount?: number, approved?: boolean, tenant_id?: string) {
		this.mode = mode;
		this.paid_on = paid_on;
		this.amount = amount;
		this.approved = approved;
		this.tenant_id = tenant_id;
	}

	add = async (response: any) => {
		pool.query(
			'INSERT INTO payments(mode,paid_on,amount,approved,tenant_id) VALUES($1,$2,$3,$4,$5)',
			[this.mode, this.paid_on, this.amount, this.approved, this.tenant_id],
			(err: any, dbRes: any) => {
				if (err) response.send({ status: false, message: err });
				else response.send({ status: true, message: 'Payment Added!' });
			},
		);
	};

	edit = (paymentId: any, response: any) => {
		pool.query(
			'UPDATE payments SET mode = $1, paid_on = $2, amount = $3, approved= $4, tenant_id = $5 WHERE payment_id = $6',
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

export default Payment;
