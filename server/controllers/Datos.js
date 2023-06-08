import { pool } from '../config/Connection.js';

export const getDatos_aspirantes = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM datos_aspirante"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDatos_aspirante = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM datos_aspirante WHERE id_datos_aspirante = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarDatos_aspirante = async (req, res) => {
    try {
        const query = `
      INSERT INTO datos_aspirante (
        id_login,
        incapacidad,
        afrodecendiente,
        beca,
        indigena,
        dialecto,
        localidad,
        oportunidades,
        cohabitacion
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.incapacidad,
            req.body.afrodecendiente,
            req.body.beca,
            req.body.indigena,
            req.body.dialecto,
            req.body.localidad,
            req.body.oportunidades,
            req.body.cohabitacion
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarDatos_aspirante = async (req, res) => {
    try {
        const query = `
      UPDATE datos_aspirante
      SET
      incapacidad = ?,
      afrodecendiente = ?,
      beca = ?,
      indigena = ?,
      dialecto = ?,
      localidad = ?,
      oportunidades = ?,
      cohabitacion = ?
      WHERE id_datos_aspirante = ?`;

        const values = [
            req.body.id_datos_aspirante,
            req.body.incapacidad,
            req.body.afrodecendiente,
            req.body.beca,
            req.body.indigena,
            req.body.dialecto,
            req.body.localidad,
            req.body.oportunidades,
            req.body.cohabitacion
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteDatos_aspirante = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM datos_aspirante WHERE id_datos_aspirante = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
