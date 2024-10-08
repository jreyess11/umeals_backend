import { Router } from 'express';
import { getEmprendimientos, getCarruselImgs, login, register, verifyToken, getUserInformation } from '../controllers/controller.js';


const router = Router();

router.get('/emprendimientos', getEmprendimientos);
router.get('/getCarruselImages',  getCarruselImgs);
router.get('/userInfo', verifyToken, getUserInformation);

router.post('/login', login);
router.post('/register', register);


export default router;
