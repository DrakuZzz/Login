import { pool } from "../models/db.js";

export const getLogin = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const query = 'SELECT Nombre, Contraseña FROM Cliente WHERE Nombre = ? AND Contraseña = ?';
        const [rows] = await pool.query(query, [usuario, password]);

        if (rows.length === 0) {
            // Regresa los valores al login.js
            return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrecto', redirect: '/login' });
        } else {
            // Regresa los valores al login.js
            return res.status(200).json({ success: true, message: 'Bienvenido', redirect: '/productos/all' });
        }
    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
};