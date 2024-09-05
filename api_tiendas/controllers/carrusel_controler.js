import { pool } from "../database/db.js";

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
