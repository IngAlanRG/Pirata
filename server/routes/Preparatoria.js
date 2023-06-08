import {
    insertarEgreso_preparatoria,
    actualizarEgreso_preparatoria,
    getEgreso_preparatoria,
    getEgreso_preparatorias,
    deleteEgreso_preparatoria
} from "../controllers/Preparatoria.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/preparatoria", verifyUser, insertarEgreso_preparatoria);
router.put("/preparatoria", verifyUser, actualizarEgreso_preparatoria);

router.get("/preparatoria", verifyUser, adminOnly, getEgreso_preparatorias);
router.get("/preparatoria/:id", verifyUser, adminOnly, getEgreso_preparatoria);
router.delete("/preparatoria/:id", verifyUser, adminOnly, deleteEgreso_preparatoria);

export default router;