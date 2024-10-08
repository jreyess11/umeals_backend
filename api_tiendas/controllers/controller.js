import { pool } from "../database/db.js";

export const getEmprendimientos = async (req, res) => {
    const id = req.params.id;
    try {
        if (id) {
            const [rows] = await pool.promise().query('SELECT * FROM emprendimiento where idEMPRENDIMIENTOS = ?', [id]);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.json({ message: 'No se encontro el emprendimiento' });
            }
        } else {
            const [rows] = await pool.promise().query('SELECT * FROM emprendimiento');
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
            const [rows] = await pool.promise().query('SELECT * FROM productos where EMPRENDIMIENTO_idEMPRENDIMIENTOS = ?', [id]);
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