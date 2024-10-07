import { Router } from 'express';
import { getEmprendimientos, getCarruselImgs, login, register } from '../controllers/controller.js';


const router = Router();

router.get('/emprendimientos', getEmprendimientos);
router.get('/getCarruselImages',  getCarruselImgs);

router.post('/login', login);

router.post('/register', register);

export default router;
