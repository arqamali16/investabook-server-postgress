import express from 'express';
import tenantController from '../Controllers/tenants';

const tenantRouters = express.Router();

tenantRouters.get('/', tenantController.getAllTenants);
tenantRouters.post('/', tenantController.addTenant);
tenantRouters.put('/:paymentId', tenantController.updateTenant);
tenantRouters.delete('/:paymentId', tenantController.deletTenant);
// tenantRouter.get('/:paymentId', tenantController.deletProperty);

export default tenantRouters;
