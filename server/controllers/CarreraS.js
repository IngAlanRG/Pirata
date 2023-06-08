import { pool } from "../config/Connection.js";

export const getCarreraSs = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM carrear_silicitada"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCarreraS = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM carrear_silicitada WHERE id_carrear_silicitada = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const AgregandoCarreraS = async (req, res) => {
    const {
        opcion,
        carrera,
        turno
    } = req.body;
    try {
        const [result] = await pool.query(
            `INSERT INTO carrear_silicitada(
                id_login, 
                opcion,
                carrera,
                turno
                ) VALUES (?, ?, ?, ?)`, [
            req.session.id_login,
            opcion,
            carrera,
            turno
        ]
        );
        res.status(200).json({ message: "Datos agregados exitosamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Ocurrió un error en el servidor" });
    }
};


export const ActualizandoCarreraS = async (req, res) => {
    try {
        const query = `
      UPDATE carrear_silicitada
      SET
        opcion = ?,
        carrera = ?,
        turno = ?
      WHERE id_carrear_silicitada = ?`;

        const values = [
            req.body.id_carrear_silicitada,
            req.body.opcion,
            req.body.carrera,
            req.body.turno
        ];

        const result = await pool.query(query, values);
        return res.status(200).json({ message: "Actualización exitosa" })
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteCarreraS = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM carrear_silicitada WHERE id_carrear_silicitada = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
