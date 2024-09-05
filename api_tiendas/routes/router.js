import { Router } from 'express';
import { getEmprendimientos } from '../controllers/controller.js';
import { getCarruselImgs } from '../controllers/carrusel_controler.js';
const router = Router();

router.get('/emprendimientos', getEmprendimientos); 
router.get('/getCarruselImages', getCarruselImgs);
export default router;