import { pool } from '../config/Connection.js';

export const getAspirantes = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM aspirante"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAspirante = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM aspirante WHERE id_aspirante = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarAspirante = async (req, res) => {
    try {
        const query = `
      INSERT INTO aspirante (
        id_login,
        apellido_paterno,
        apellido_materno,
        nombres,
        sexo,
        fecha_nacimiento,
        curp,
        nacionalidad,
        estado_civil
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.apellido_paterno,
            req.body.apellido_materno,
            req.body.nombres,
            req.body.sexo,
            req.body.fecha_nacimiento,
            req.body.curp,
            req.body.nacionalidad,
            req.body.estado_civil,
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarAspirante = async (req, res) => {
    try {
        const query = `
      UPDATE aspirante
      SET
        apellido_paterno = ?,
        apellido_materno = ?,
        nombres = ?,
        sexo = ?,
        fecha_nacimiento = ?,
        curp = ?,
        nacionalidad = ?,
        estado_civil = ?
      WHERE id_aspirante = ?`;

        const values = [
            req.body.id_aspirante,
            req.body.apellido_paterno,
            req.body.apellido_materno,
            req.body.nombres,
            req.body.sexo,
            req.body.fecha_nacimiento,
            req.body.curp,
            req.body.nacionalidad,
            req.body.estado_civil,
            req.body.fecha_registro,
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteAspirante = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM aspirante WHERE id_aspirante = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
