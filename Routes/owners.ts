import express from 'express';
import OwnerController from '../Controllers/owners';
import isAuth from '../Middleware/is-auth';

const ownersRouter = express.Router();

ownersRouter.get('/', isAuth, OwnerController.getAllOwners);
ownersRouter.post('/', isAuth, OwnerController.addOwner);
ownersRouter.put('/:id', isAuth, OwnerController.updateOwner);
ownersRouter.delete('/:id', isAuth, OwnerController.deletOwner);

export default ownersRouter;
