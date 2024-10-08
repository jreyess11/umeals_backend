import { Router } from 'express';
import { getCarruselImgs, getEmprendimientos, getProductos, login, register, verifyToken, getUserInformation } from '../controllers/controller.js';
const router = Router();

router.get('/emprendimientos', getEmprendimientos);
router.get('/emprendimientos/:id', getEmprendimientos);
router.get('/productos/:id', getProductos);
router.get('/getCarruselImages', getCarruselImgs);
router.get('/userInfo', verifyToken, getUserInformation);
router.post('/login', login);
router.post('/register', register);

export default router;
