import express from 'express';
import propertiesController from '../Controllers/properties';

const propertyRouter = express.Router();

propertyRouter.get('/', propertiesController.getAllProperties);
propertyRouter.post('/', propertiesController.addProperty);
propertyRouter.put('/:paymentId', propertiesController.updateProperty);
propertyRouter.delete('/:paymentId', propertiesController.deletProperty);
propertyRouter.get('/:paymentId', propertiesController.deletProperty);

export default propertyRouter;
