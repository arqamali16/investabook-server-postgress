import Payment from '../Models/payment';
const getAllPayments = (req: any, res: any) => {
	const owner = new Payment();
	owner.getAll(res);
};

const addPayment = (req: any, res: any) => {
	const { mode, paid_on, amount, approved, tenant_id } = req.body;
	const owner = new Payment(mode, paid_on, amount, approved, tenant_id);
	owner.add(res);
};

const getPaymentDetail = (req: any, res: any) => {
	// const hashedPassword = bcrypt.hashSync(req.body.password, 8);
	// const token = jwt.sign({ id: 1234 }, 'secret', {
	// 	expiresIn: 86400, // expires in 24 hours
	// });
	// res.status(200).send({ auth: true, token });
};

const updatePayment = (req: any, res: any) => {
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

const deletPayment = () => {};

export default { getAllPayments, addPayment, getPaymentDetail, updatePayment, deletPayment };
