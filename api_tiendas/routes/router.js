import { Router } from 'express';
import { getEmprendimientos } from '../controllers/controller.js';

const router = Router();

router.get('/emprendimientos', getEmprendimientos); 

export default router;