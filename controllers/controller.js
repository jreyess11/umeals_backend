import { pool } from "../database/db.js";


//! getEmprendimientos
export const getEmprendimientos = async (req, res) => {
    const id = req.params.id;
    try {
        if (id) {
            const [rows] = await pool.promise().query('SELECT * FROM EMPRENDIMIENTO where idEMPRENDIMIENTOS = ?', [id]);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.json({ message: 'No se encontro el emprendimiento' });
            }
        } else {
            const [rows] = await pool.promise().query('SELECT * FROM EMPRENDIMIENTO');
            if (rows.length > 0) {
                res.json(rows);
            } else {
                res.json({ message: 'No hay emprendimientos' });
            }
        }

    } catch (error) {
        console.error('Error al obtener los emprendimientos:', error);
        res.status(500).json({ message: 'Error al obtener los emprendimientos' });
    }
};

export const getProductos = async (req, res) => {
    const id = req.params.id;
    try {
        if (id) {
            const [rows] = await pool.promise().query('SELECT * FROM PRODUCTOS where EMPRENDIMIENTO_idEMPRENDIMIENTOS = ?', [id]);
            if (rows.length > 0) {
                res.json(rows);
            } else {
                res.json({ message: 'No se encontraron productos' });
            }
        } else {
            res.json({ message: 'No se encontraron productos' });
        }

    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

export const getFavoriteEmprendimientos = async (req, res) => {

    try {
        const userId = req.user.userId;
        
        const [favoriteRows] = await pool.promise().query(
            'SELECT EMPRENDIMIENTO_idEMPRENDIMIENTOS FROM EMPRENDIMIENTO_FAVORITOS WHERE USUARIO_idUSUARIOS = ?',
            [userId]
        );

        if (favoriteRows.length === 0) {
            return res.status(204).json({ message: 'No hay emprendimientos favoritos' });
        }

        const emprendimientoIds = favoriteRows.map(row => row.EMPRENDIMIENTO_idEMPRENDIMIENTOS);
        const [emprendimientoRows] = await pool.promise().query(
            'SELECT * FROM emprendimiento WHERE idEMPRENDIMIENTOS IN (?)',
            [emprendimientoIds]
        );

        res.json(emprendimientoRows);

    } catch (error) {
        console.error('Error al obtener los emprendimientos favoritos:', error);
        res.status(500).json({ message: 'Error al obtener los emprendimientos favoritos' });
    }
};

export const addFavoriteEmprendimiento = async (req, res) => {
    const { id } = req.body;
    const userId = req.user.userId;

    if (!id) {
        return res.status(400).json({ message: 'ID de emprendimiento es requerido' });
    }

    try {
        const [existingFavorite] = await pool.promise().query(
            'SELECT * FROM EMPRENDIMIENTO_FAVORITOS WHERE EMPRENDIMIENTO_idEMPRENDIMIENTOS = ? AND USUARIO_idUSUARIOS = ?',
            [id, userId]
        );

        if (existingFavorite.length > 0) {
            return res.status(400).json({ message: 'El emprendimiento ya está en favoritos' });
        }

        await pool.promise().query(
            'INSERT INTO emprendimientos_favoritos (EMPRENDIMIENTO_idEMPRENDIMIENTOS, USUARIO_idUSUARIOS) VALUES (?, ?)',
            [id, userId]
        );

        res.status(201).json({ message: 'Emprendimiento añadido a favoritos exitosamente' });
    } catch (error) {
        console.error('Error al añadir el emprendimiento a favoritos:', error);
        res.status(500).json({ message: 'Error al añadir el emprendimiento a favoritos' });
    }
};

export const removeFavoriteEmprendimiento = async (req, res) => {
    const id = req.params.id;
    const userId = req.user.userId;

    if (!id) {
        return res.status(400).json({ message: 'ID de emprendimiento es requerido' });
    }

    try {
        const [existingFavorite] = await pool.promise().query(
            'SELECT * FROM emprendimientos_favoritos WHERE EMPRENDIMIENTO_idEMPRENDIMIENTOS = ? AND USUARIO_idUSUARIOS = ?',
            [id, userId]
        );

        if (existingFavorite.length === 0) {
            return res.status(400).json({ message: 'El emprendimiento no está en favoritos' });
        }

        await pool.promise().query(
            'DELETE FROM emprendimientos_favoritos WHERE EMPRENDIMIENTO_idEMPRENDIMIENTOS = ? AND USUARIO_idUSUARIOS = ?',
            [id, userId]
        );

        res.status(200).json({ message: 'Emprendimiento eliminado de favoritos exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el emprendimiento de favoritos:', error);
        res.status(500).json({ message: 'Error al eliminar el emprendimiento de favoritos' });
    }
};
//! carrusel imagese
export const getCarruselImgs = async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM CARRUSEL_IMAGES');
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.json({ message: 'No hay imagenes disponibles' });
        }
    } catch (error) {
        console.error('Error al obtener las imagenes:', error);
        res.status(500).json({ message: 'Error al obtener las imágenes' });
    }
};

//! login

const JWT_SECRET = '123Ñ+*'; 

export const login = async (req, res) => {
    const { correo, password } = req.body;

   
    if (!correo || !password) {
        return res.status(400).json({ success: false, message: 'Correo y contraseña son requeridos' });
    }

    try {
        
        const [rows] = await pool.promise().query('SELECT * FROM USUARIO WHERE correo = ?', [correo]);

        if (rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
        }

        const user = rows[0];        

        
        if (user.password === password) {
            
            const token = jwt.sign({ correo: user.correo, userId: user.idUSUARIOS }, JWT_SECRET, {
                expiresIn: '1d', 
            });
            console.log('Token generado:', token);

            return res.status(200).json({ success: true, message: 'Inicio de sesión exitoso', token });
        } else {
            return res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error al procesar la solicitud de inicio de sesión:', error);
        return res.status(500).json({ success: false, message: 'Error del servidor' });
    }
};


//! registro

export const register = async (req, res) => {
    const { Nombre, correo, password, Apellidos, telefono } = req.body;

    if (!Nombre || !correo || !password) {
        return res.status(400).json({ success: false, message: 'Nombre, correo y contraseña son requeridos' });
    }

    try {
        const [existingUsers] = await pool.promise().query('SELECT * FROM USUARIO WHERE correo = ?', [correo]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ success: false, message: 'Correo ya registrado' });
        }

        const [result] = await pool.promise().query(
            'INSERT INTO USUARIO (Nombre, correo, password, Apellidos, telefono) VALUES (?, ?, ?, ?, ?)',
            [Nombre, correo, password, Apellidos, telefono || null]
        );

        res.status(201).json({ success: true, message: 'Usuario registrado exitosamente', userId: result.insertId });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ success: false, message: 'Error del servidor' });
    }
};


//! PA VERIFICAR Y DECODIFICAR EL JWT
import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No hay token proporcionado.' });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET); 
        req.user = verified; 
        next(); 
    } catch (error) {
        res.status(400).json({ message: 'Token no válido.' });
    }
};


export const getUserInformation = async (req, res) => {
    try {
        const userCorreo = req.user.correo; 

        const [rows] = await pool.promise().query('SELECT * FROM USUARIO WHERE correo = ?', [userCorreo]);

        if (rows.length > 0) {
            res.json(rows[0]); 
        } else {
            res.json({ message: 'No se encontró información del usuario' });
        }
    } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
        res.status(500).json({ message: 'Error al obtener información del usuario' });
    }
};

export const updateUser = async (req, res) => {
    const { Nombre, Apellidos, telefono, imageURL } = req.body; 
    const { correo } = req.user; 

    if (!correo) {
        return res.status(400).json({ success: false, message: 'Correo no encontrado en el token' });
    }

    try {
        const [existingUser] = await pool.promise().query('SELECT * FROM USUARIO WHERE correo = ?', [correo]);

        if (existingUser.length === 0) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        const fieldsToUpdate = [];
        const values = [];

        if (Nombre) {
            fieldsToUpdate.push('Nombre = ?');
            values.push(Nombre);
        }
        if (Apellidos) {
            fieldsToUpdate.push('Apellidos = ?');
            values.push(Apellidos);
        }
        if (telefono) {
            fieldsToUpdate.push('telefono = ?');
            values.push(telefono);
        }
        if (imageURL) {
            fieldsToUpdate.push('imageURL = ?');
            values.push(imageURL);
        }

        
        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ success: false, message: 'No hay campos para actualizar' });
        }

        values.push(correo);

        const updateQuery = `UPDATE USUARIO SET ${fieldsToUpdate.join(', ')} WHERE correo = ?`;
        
        await pool.promise().query(updateQuery, values);

        res.status(200).json({ success: true, message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ success: false, message: 'Error del servidor' });
    }
};
