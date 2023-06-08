import { pool } from '../config/Connection.js';

export const getCasas = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM casa"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCasa = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM casa WHERE id_casa = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarCasa = async (req, res) => {
    try {
        const query = `
      INSERT INTO casa (
        id_login,
        tipo_casa,
        numero_cuartos,
        numero_habitantes
      )
      VALUES (?, ?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.tipo_casa,
            req.body.numero_cuartos,
            req.body.numero_habitantes
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarCasa = async (req, res) => {
    try {
        const query = `
      UPDATE casa
      SET
      tipo_casa = ?,
      numero_cuartos = ?,
      numero_habitantes = ?
      WHERE id_casa = ?`;

        const values = [
            req.body.id_casa,
            req.body.tipo_casa,
            req.body.numero_cuartos,
            req.body.numero_habitantes,
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteCasa = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM casa WHERE id_casa = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
