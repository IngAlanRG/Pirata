import {
    insertarDatos_aspirante,
    actualizarDatos_aspirante,
    getDatos_aspirante,
    getDatos_aspirantes,
    deleteDatos_aspirante
} from "../controllers/Datos.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/Datos_aspirante", verifyUser, insertarDatos_aspirante);
router.put("/Datos_aspirante", verifyUser, actualizarDatos_aspirante);

router.get("/Datos_aspirante", verifyUser, adminOnly, getDatos_aspirantes);
router.get("/Datos_aspirante/:id", verifyUser, adminOnly, getDatos_aspirante);
router.delete("/Datos_aspirante/:id", verifyUser, adminOnly, deleteDatos_aspirante);
export default router;