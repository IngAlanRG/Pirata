import { pool } from "../config/Connection.js";
import bcrypt from "bcryptjs";

export const AddUser = async (req, res) => {
    const {
        name_user,
        email,
        password,
        confirm_password,
    } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ message: "Los passwords no coinciden" });
    } else {
        const salt = await bcrypt.genSalt(7);
        const passwordHash = await bcrypt.hash(password, salt);
        const confirmar_passwordHash = await bcrypt.hash(confirm_password, salt);

        const [rows] = await pool.query(`SELECT * FROM login WHERE email = ?`, [req.body.correo]);
        console.log(rows)

        if (rows.length > 0) {
            // El correo electrónico ya existe
            return res.send({ message: "Usuario con este correo ya existe" });
        } else {
            try {
                const [result] = await pool.query(
                    `CALL insert_login(?, ?, ?, ?)`,
                    [
                        name_user,
                        email,
                        passwordHash,
                        confirmar_passwordHash,
                    ]
                );
                return res.status(200).json({ message: "Datos agregados correctamente" })
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
};
