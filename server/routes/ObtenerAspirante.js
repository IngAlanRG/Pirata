import {
    ObtenerDatosAspirante
} from "../controllers/ObtenerAspirante.js";
import { verifyUser } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.get("/obtenerAspirante", verifyUser, ObtenerDatosAspirante);

export default router;