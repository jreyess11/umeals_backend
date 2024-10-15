import { Router } from 'express';
import { getCarruselImgs, getEmprendimientos, getFavoriteEmprendimientos, addFavoriteEmprendimiento, removeFavoriteEmprendimiento, getProductos, login, register, verifyToken, getUserInformation, updateUser } from '../controllers/controller.js';
const router = Router();

router.get('/emprendimientos', getEmprendimientos);
router.get('/emprendimientos/:id', getEmprendimientos);
router.get('/empFavoritos', verifyToken, getFavoriteEmprendimientos);
router.post('/empFavoritos', verifyToken, addFavoriteEmprendimiento);
router.delete('/empFavoritos/:id', verifyToken, removeFavoriteEmprendimiento);
router.get('/productos/:id', getProductos);
router.get('/getCarruselImages', getCarruselImgs);
router.get('/userInfo', verifyToken, getUserInformation);
router.post('/login', login);
router.post('/register', register);
router.put('/update', verifyToken, updateUser);

export default router;
