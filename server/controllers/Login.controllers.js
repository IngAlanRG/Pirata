import { pool } from "../config/Connection.js";
import bcrypt from "bcryptjs";


export const Me = async (req, res) => {
    if (!req.session.id_login) {
        return res.status(401).json({ msg: '¡Por favor, ingrese a su cuenta!' });
    }

    const [rows] = await pool.query(`SELECT name_user, email, role FROM login WHERE id_login = ? `, [req.session.id_login]);
    const user = rows[0];

    if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
};

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(400).json({ msg: 'No se puede cerrar la sesión' });
        }

        res.status(200).json({ msg: 'has cerrado la sesión' });
    });
};

export const login = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM login WHERE email = ?', [req.body.email]);
        const user = rows[0];

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        req.session.id_login = user.id_login;
        const { id_login, name_user, email, role } = user;
        res.status(200).json({ id_login, name_user, email, role });
    } catch (error) {
        console.error('Error en la función login:', error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
};

