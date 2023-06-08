import { pool } from '../config/Connection.js';

export const getEgreso_preparatorias = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM egreso_preparatoria"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getEgreso_preparatoria = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM egreso_preparatoria WHERE id_egreso_preparatoria = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarEgreso_preparatoria = async (req, res) => {
    try {
        const query = `
      INSERT INTO egreso_preparatoria (
        id_login,
        nombre,
        dependencia_financiamiento,
        ciudad,
        estado,
        promedio_general,
        año_egreso
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.nombre,
            req.body.dependencia_financiamiento,
            req.body.ciudad,
            req.body.estado,
            req.body.promedio_general,
            req.body.año_egreso
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarEgreso_preparatoria = async (req, res) => {
    try {
        const query = `
        UPDATE egreso_preparatoria
        SET
        nombre = ?
        dependencia_financiamiento = ?
        ciudad = ?
        estado = ?
        promedio_general = ?
        año_egreso = ?  
        WHERE id_preparatoria = ?`;

        const values = [
            req.body.id_preparatoria,
            req.body.nombre,
            req.body.dependencia_financiamiento,
            req.body.ciudad,
            req.body.estado,
            req.body.promedio_general,
            req.body.año_egreso
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteEgreso_preparatoria = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM egreso_preparatoria WHERE id_preparatoria = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
