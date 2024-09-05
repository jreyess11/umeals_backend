import { pool } from "../database/db.js";

export const register = async (req, res) => {
    const { Nombre, correo, password } = req.body;

    if (!Nombre || !correo || !password) {
        return res.status(400).json({ success: false, message: 'Nombre, correo y contraseña son requeridos' });
    }

    try {
        const [existingUsers] = await pool.query('SELECT * FROM USUARIO WHERE correo = ?', [correo]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ success: false, message: 'Correo ya registrado' });
        }

        const [result] = await pool.query(
            'INSERT INTO USUARIO (Nombre, correo, password) VALUES (?, ?, ?, ?)',
            [Nombre, correo, password || null]
        );

        res.status(201).json({ success: true, message: 'Usuario registrado exitosamente', userId: result.insertId });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ success: false, message: 'Error del servidor' });
    }
};
