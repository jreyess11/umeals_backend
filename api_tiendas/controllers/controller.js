import { pool } from "../database/db.js";

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
