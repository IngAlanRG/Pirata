import {
    insertarAspirante,
    actualizarAspirante,
    getAspirante,
    getAspirantes,
    deleteAspirante
} from "../controllers/Aspirante.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/aspirante", verifyUser, insertarAspirante);
router.put("/aspirante", verifyUser, actualizarAspirante);

router.get("/aspirante", verifyUser, adminOnly, getAspirantes);
router.get("/aspirante/:id", verifyUser, adminOnly, getAspirante);
router.delete("/aspirante/:id", verifyUser, adminOnly, deleteAspirante);
export default router;