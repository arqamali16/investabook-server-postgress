import express from 'express';
import paymentControllers from '../Controllers/payments';
import isAuth from '../Middleware/is-auth';

const paymentRouters = express.Router();

paymentRouters.get('/', isAuth, paymentControllers.getAllPayments);
paymentRouters.post('/', isAuth, paymentControllers.addPayment);
paymentRouters.put('/:paymentId', isAuth, paymentControllers.updatePayment);
paymentRouters.delete('/:paymentId', isAuth, paymentControllers.deletPayment);
paymentRouters.get('/:paymentId', isAuth, paymentControllers.deletPayment);

export default paymentRouters;
