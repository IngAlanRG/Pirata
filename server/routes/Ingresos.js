import {
    insertarIngresos_economicos,
    actualizarIngresos_economicos,
    getIngresos_economicos,
    getIngresos_economicoss,
    deleteIngresos_economicos
} from "../controllers/Ingresos.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/ingresos", verifyUser, insertarIngresos_economicos);
router.put("/ingresos", verifyUser, actualizarIngresos_economicos);

router.get("/ingresos", verifyUser, adminOnly, getIngresos_economicoss);
router.get("/ingresos/:id", verifyUser, adminOnly, getIngresos_economicos);
router.delete("/ingresos/:id", verifyUser, adminOnly, deleteIngresos_economicos);
export default router;