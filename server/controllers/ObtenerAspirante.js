import { pool } from '../config/Connection.js';

export const ObtenerDatosAspirante = async (req, res) => {
    console.log(req.session.id_login)
    try {
        const [result] = await pool.query(`  
        SELECT
    *
FROM
    login
INNER JOIN aspirante ON login.id_login = aspirante.id_login
INNER JOIN carrear_silicitada ON login.id_login = carrear_silicitada.id_login
INNER JOIN datos_aspirante ON login.id_login = datos_aspirante.id_login
INNER JOIN domicilio ON login.id_login = domicilio.id_login
INNER JOIN ingresos_economicos ON login.id_login = ingresos_economicos.id_login
INNER JOIN Dependencia_economica ON login.id_login = Dependencia_economica.id_login
INNER JOIN metodo_admision ON login.id_login = metodo_admision.id_login
INNER JOIN egreso_preparatoria ON login.id_login = egreso_preparatoria.id_login
INNER JOIN padres ON login.id_login = padres.id_login
WHERE
    login.id_login =  ${req.session.id_login}`
        );

        if (result.length === 0)
            return res.status(404).json({ message: "recurso no encontrado" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
