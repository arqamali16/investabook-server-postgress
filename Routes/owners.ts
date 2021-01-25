import express from 'express';
import OnwerController from '../Controllers/owners';

const ownersRouter = express.Router();

ownersRouter.get('/', OnwerController.getAllOwners);
ownersRouter.post('/', OnwerController.addOwner);
ownersRouter.put('/:id', OnwerController.updateOwner);
ownersRouter.delete('/:id', OnwerController.deletOwner);

export default ownersRouter;
