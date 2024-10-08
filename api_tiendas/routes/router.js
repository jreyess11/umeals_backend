import { Router } from 'express';
import { getEmprendimientos, getProductos } from '../controllers/controller.js';
import { getCarruselImgs } from '../controllers/carrusel_controler.js';
const router = Router();

router.get('/emprendimientos', getEmprendimientos);
router.get('/emprendimientos/:id', getEmprendimientos);
router.get('/productos/:id', getProductos);
router.get('/getCarruselImages', getCarruselImgs);
export default router;