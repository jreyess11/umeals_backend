import { Router } from 'express';
import { getEmprendimientos, getCarruselImgs, login, register, verifyToken, getUserInformation, updateUser } from '../controllers/controller.js';


const router = Router();

router.get('/emprendimientos', getEmprendimientos);
router.get('/getCarruselImages',  getCarruselImgs);
router.get('/userInfo', verifyToken, getUserInformation);

router.put('/update', verifyToken, updateUser);

router.post('/login', login);
router.post('/register', register);


export default router;
