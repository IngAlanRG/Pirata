import { pool } from "../config/Connection.js"
export const verifyUser = async (req, res, next) => {
    if (!req.session.id_login) {
        return res.status(401).json({ msg: "¡Por favor, ingrese a su cuenta!" });
    }
    try {
        const [results] = await pool.query(
            "SELECT * FROM login WHERE id_login = ?",
            [req.session.id_login]
        );
        if (results.length === 0) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        req.id_login = results[0].id_login;
        req.role = results[0].role;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};

// Función para permitir solo a los administradores el acceso a ciertas rutas
export const adminOnly = async (req, res, next) => {
    try {
        // const connection = await mysql.createConnection(pool);
        const [results] = await pool.query("SELECT * FROM login WHERE id_login = ?",
            [req.session.id_login]
        );
        if (results.length === 0) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        if (results[0].role !== "administrador") {
            return res.status(403).json({ msg: "Acceso prohibido" });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};