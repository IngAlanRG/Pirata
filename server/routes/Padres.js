import {
    insertarPadres,
    actualizarPadres,
    getPadres,
    getPadress,
    deletePadres
} from "../controllers/Padres.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/padres", verifyUser, insertarPadres);
router.put("/padres", verifyUser, actualizarPadres);

router.get("/padres", verifyUser, adminOnly, getPadress);
router.get("/padres/:id", verifyUser, adminOnly, getPadres);
router.delete("/padres/:id", verifyUser, adminOnly, deletePadres);
export default router;