import { pool } from '../config/Connection.js';

export const getDomicilios = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM domicilio"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDomicilio = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM domicilio WHERE id_domicilio = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarDomicilio = async (req, res) => {
    try {
        const query = `
      INSERT INTO domicilio (
        id_login,
        calle,
        numero_interior,
        numero_exterior,
        estado,
        municipio,
        codigo_postal,
        colonia_o_localidad,
        numero_telefonico
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.calle,
            req.body.numero_interior,
            req.body.numero_exterior,
            req.body.estado,
            req.body.municipio,
            req.body.codigo_postal,
            req.body.colonia_o_localidad,
            req.body.numero_telefonico
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarDomicilio = async (req, res) => {
    try {
        const query = `
      UPDATE domicilio
      SET
      calle = ?,
      numero_interior = ?,
      numero_exterior = ?,
      estado = ?,
      municipio = ?,
      codigo_postal = ?,
      colonia_o_localidad = ?,
      numero_telefonico = ?
      WHERE id_domicilio = ?`;

        const values = [
            req.body.id_domicilio,
            req.body.calle,
            req.body.numero_interior,
            req.body.numero_exterior,
            req.body.estado,
            req.body.municipio,
            req.body.codigo_postal,
            req.body.colonia_o_localidad,
            req.body.numero_telefonico
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteDomicilio = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM domicilio WHERE id_domicilio = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
