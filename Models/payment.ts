class Payment {
	payment_id: string;
	mode: string;
	paid_on: string;
	amount: number;
	approved: boolean;
	tenant_id: string;

	constructor(
		payment_id: string,
		mode: string,
		paid_on: string,
		amount: number,
		approved: boolean,
		tenant_id: string,
	) {
		this.payment_id = payment_id;
		this.mode = mode;
		this.paid_on = paid_on;
		this.amount = amount;
		this.approved = approved;
		this.tenant_id = tenant_id;
	}
}

export default Payment;
