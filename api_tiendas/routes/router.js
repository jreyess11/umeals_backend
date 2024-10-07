import { Router } from 'express';
import { getEmprendimientos, getCarruselImgs, login, register } from '../controllers/controller.js';
import { validateTokenMiddleware } from '../middlewares/validateTokenMiddleware.js';

const router = Router();

router.get('/emprendimientos', validateTokenMiddleware, getEmprendimientos);
router.get('/getCarruselImages', validateTokenMiddleware, getCarruselImgs);

router.post('/login', login);
router.post('/register', register);

export default router;
