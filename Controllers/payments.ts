import Payment from '../Models/payment';
const getAllPayments = (req: any, res: any) => {
	const owner = new Payment();
	owner.getAll(res);
};

const addPayment = (req: any, res: any) => {
	const { mode, paid_on, amount, approved, tenant_id } = req.body;
	const payment = new Payment(mode, paid_on, amount, approved, tenant_id);
	payment.add(res);
};

const getPaymentDetail = (req: any, res: any) => {
	// const hashedPassword = bcrypt.hashSync(req.body.password, 8);
	// const token = jwt.sign({ id: 1234 }, 'secret', {
	// 	expiresIn: 86400, // expires in 24 hours
	// });
	// res.status(200).send({ auth: true, token });
};

const updatePayment = (req: any, res: any) => {
	const { paymentId } = req.params;
	const { mode, paid_on, amount, approved, tenant_id } = req.body;
	const payment = new Payment(mode, paid_on, amount, approved, tenant_id);
	payment.edit(paymentId, res);
};

const deletPayment = (req: any, res: any) => {
	const { id } = req.params;
	const payment = new Payment();
	payment.delete(id, res);
};

export default { getAllPayments, addPayment, getPaymentDetail, updatePayment, deletPayment };
