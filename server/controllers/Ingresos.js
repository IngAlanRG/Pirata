import { pool } from '../config/Connection.js';

export const getIngresos_economicoss = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM ingresos_economicos"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getIngresos_economicos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM ingresos_economicos WHERE id_ingresos_economicos = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarIngresos_economicos = async (req, res) => {
    try {
        const query = `
      INSERT INTO ingresos_economicos (
        id_login,
        familiar,
        monto
      )
      VALUES (?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.familiar,
            req.body.monto
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarIngresos_economicos = async (req, res) => {
    try {
        const query = `
      UPDATE ingresos_economicos
      SET
      familiar = ?,
      monto = ?
      WHERE id_ingresos_economicos = ?`;

        const values = [
            req.body.id_ingresos_economicos,
            req.body.familiar,
            req.body.monto
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteIngresos_economicos = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM ingresos_economicos WHERE id_ingresos_economicos = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
