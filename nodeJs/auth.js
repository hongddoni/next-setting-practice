import {Router} from 'express';
const authRouter = Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);