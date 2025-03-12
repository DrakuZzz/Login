import { pool } from "../models/db.js";

export const getInsercion = (req, res) => {
    const { usuario, password } = req.body;
    const query = 'INSERT INTO Cliente (Nombre, Contraseña) VALUES (?, ?)';
    pool.query(query, [usuario, password]);
};