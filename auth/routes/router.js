import { Router } from 'express';
import { login } from '../controllers/authController.js';
import { register } from '../controllers/registerController.js';

const router = Router();

router.post('/login', login); 
router.post('/register', register);

export default router;