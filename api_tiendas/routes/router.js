import { Router } from 'express';
import { getEmprendimientos } from '../controllers/controller.js';
import { getCarruselImgs } from '../controllers/controller.js';
import { login } from '../controllers/controller.js';
import { register } from '../controllers/controller.js';
import {getUserInformation} from'../controllers/controller.js';
const router = Router();

router.get('/emprendimientos', getEmprendimientos); 
router.get('/getCarruselImages', getCarruselImgs);
router.get('/getUserInfo', getUserInformation);

router.post('/login', login); 
router.post('/register', register);

export default router;