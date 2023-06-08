import { pool } from '../config/Connection.js';

export const getDependencia_economicas = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM Dependencia_economica"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDependencia_economica = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Dependencia_economica WHERE id_Dependencia_economica = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const insertarDependencia_economica = async (req, res) => {
    try {
        const query = `
      INSERT INTO Dependencia_economica (
        id_login,
        dependencia_economica,
        numero_dependientes
      )
      VALUES (?, ?, ?)`;

        const values = [
            req.session.id_login,
            req.body.dependencia_economica,
            req.body.numero_dependientes
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Agregando datos exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const actualizarDependencia_economica = async (req, res) => {
    try {
        const query = `
      UPDATE Dependencia_economica
      SET
      dependencia_economica = ?,
      numero_dependientes = ?
      WHERE id_Dependencia_economica = ?`;

        const values = [
            req.body.id_Dependencia_economica,
            req.body.dependencia_economica,
            req.body.numero_dependientes
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteDependencia_economica = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Dependencia_economica WHERE id_Dependencia_economica = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
