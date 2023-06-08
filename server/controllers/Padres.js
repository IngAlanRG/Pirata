import { pool } from '../config/Connection.js';

export const getPadress = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM padres"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPadres = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM padres WHERE id_padres = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarPadres = async (req, res) => {
    try {
        const query = `
      INSERT INTO padres (
        id_login,
        apellido_paterno,
        apellido_materno,
        nombre,
        progenitor,
        vive,
        nivel_estudios,
        ocupacion,
        telefono_emergencia,
        telefono_trabajo,
        lugar_trabajo
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.apellido_paterno,
            req.body.apellido_materno,
            req.body.nombre,
            req.body.progenitor,
            req.body.vive,
            req.body.nivel_estudios,
            req.body.ocupacion,
            req.body.telefono_emergencia,
            req.body.telefono_trabajo,
            req.body.lugar_trabajo
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarPadres = async (req, res) => {
    try {
        const query = `
      UPDATE padres
      SET
      apellido_paterno = ?,
      apellido_materno = ?,
      nombre = ?,
      progenitor = ?,
      vive = ?,
      nivel_estudios = ?,
      ocupacion = ?,
      telefono_emergencia = ?,
      telefono_trabajo = ?,
      lugar_trabajo = ?
      WHERE id_padres = ?`;

        const values = [
            req.body.id_padres,
            req.body.apellido_paterno,
            req.body.apellido_materno,
            req.body.nombre,
            req.body.progenitor,
            req.body.vive,
            req.body.nivel_estudios,
            req.body.ocupacion,
            req.body.telefono_emergencia,
            req.body.telefono_trabajo,
            req.body.lugar_trabajo
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deletePadres = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM padres WHERE id_padres = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
