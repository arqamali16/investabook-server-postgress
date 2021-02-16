import express from 'express';
import tenantController from '../Controllers/tenants';
import isAuth from '../Middleware/is-auth';

const tenantRouters = express.Router();

tenantRouters.get('/', isAuth, tenantController.getAllTenants);
tenantRouters.post('/', isAuth, tenantController.addTenant);
tenantRouters.put('/:paymentId', isAuth, tenantController.updateTenant);
tenantRouters.delete('/:paymentId', isAuth, tenantController.deletTenant);
// tenantRouter.get('/:paymentId', tenantController.deletProperty);

export default tenantRouters;
