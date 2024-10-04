import { pool } from "../database/db.js";

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
        res.status(500).json({ message: 'Error al obtener las iamgenes' });
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

        if (user.password == password) {
            res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error al procesar la solicitud de inicio de sesión:', error);
        res.status(500).json({ success: false, message: 'Error del servidor' });
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
