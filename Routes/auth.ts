import express from 'express';
import AuthController from '../Controllers/auth';

const authRouter = express.Router();

authRouter.post('/login', AuthController.login);

export default authRouter;
