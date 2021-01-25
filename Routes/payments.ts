import express from 'express';
import paymentControllers from '../Controllers/payments';

const paymentRouters = express.Router();

paymentRouters.get('/', paymentControllers.getAllPayments);
paymentRouters.post('/', paymentControllers.addPayment);
paymentRouters.put('/:paymentId', paymentControllers.updatePayment);
paymentRouters.delete('/:paymentId', paymentControllers.deletPayment);
paymentRouters.get('/:paymentId', paymentControllers.deletPayment);

export default paymentRouters;
