import express from 'express';
import propertiesController from '../Controllers/properties';
import isAuth from '../Middleware/is-auth';

const propertyRouter = express.Router();

propertyRouter.get('/', isAuth, propertiesController.getAllProperties);
propertyRouter.post('/', isAuth, propertiesController.addProperty);
propertyRouter.put('/:paymentId', isAuth, propertiesController.updateProperty);
propertyRouter.delete('/:paymentId', isAuth, propertiesController.deletProperty);
propertyRouter.get('/:paymentId', isAuth, propertiesController.deletProperty);

export default propertyRouter;
