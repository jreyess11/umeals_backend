import { pool } from "../database/db.js";
import { JwtAdapter } from "../config/jwt.adapter.js";

//! getEmprendimientos
export const getEmprendimientos = async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM emprendimiento');
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.json({ message: 'No hay emprendimientos' });
        }
    } catch (error) {
        console.error('Error al obtener los emprendimientos:', error);
        res.status(500).json({ message: 'Error al obtener los emprendimientos' });
    }
};

//! carrusel imagese
export const getCarruselImgs = async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM carrusel_images');
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
export const login = async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ success: false, message: 'Correo y contraseña son requeridos' });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM USUARIO WHERE correo = ?', [correo]);

        if (rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
        }

        const user = rows[0];

        if (user.password === password) {
            const token = await JwtAdapter.generateToken({ correo: user.correo });
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
        const [existingUsers] = await pool.query('SELECT * FROM USUARIO WHERE correo = ?', [correo]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ success: false, message: 'Correo ya registrado' });
        }

        const [result] = await pool.query(
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
        const verified = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = verified; 
        next(); 
    } catch (error) {
        res.status(400).json({ message: 'Token no válido.' });
    }
};

//! Obtener información del usuario (nombre, correo, imagen, etc)
export const getUserInformation = async (req, res) => {
    try {
        const userId = req.user.id; 

        const [rows] = await pool.promise().query('SELECT * FROM USUARIO WHERE id = ?', [userId]);

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
