import { pool } from "../config/Connection.js";

export const getMetodos = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM metodo_admision"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getMetodo = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM metodo_admision WHERE id_metodo_admision = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const AgregandoMetodo = async (req, res) => {
    console.log("hola");
    const { modalidad, periodo } = req.body;
    console.log(modalidad, periodo, req.session.id_login);
    try {
        const [result] = await pool.query(
            "INSERT INTO metodo_admision(id_login, modalidad, periodo) VALUES (?, ?, ?)",
            [req.session.id_login, modalidad, periodo]
        );
        res.status(200).json({ message: "Datos agregados exitosamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrió un error en el servidor" });
    }
};


export const ActualizandoMetodo = async (req, res) => {
    try {
        const query = `
      UPDATE metodo_admision
      SET
        modalidad = ?,
        periodo = ?
      WHERE id_metodo_admision = ?`;

        const values = [
            req.body.id_metodo_admision,
            req.body.modalidad,
            req.body.periodo
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteMetodo = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM metodo_admision WHERE id_metodo_admision = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
