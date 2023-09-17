import express from 'express';
import { forgot, login, register, reset } from '../Controllers/userController.js';


const router = express.Router();

router.post('/register',register);
router.post('/reset',forgot);
router.put('/reset/:resetToken',reset);
router.post('/login',login);



export default router;