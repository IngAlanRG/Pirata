import {
    insertarCasa,
    actualizarCasa,
    getCasa,
    getCasas,
    deleteCasa
} from "../controllers/Casa.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/casa", verifyUser, insertarCasa);
router.put("/casa", verifyUser, actualizarCasa);

router.get("/casa", verifyUser, adminOnly, getCasas);
router.get("/casa/:id", verifyUser, adminOnly, getCasa);
router.delete("/casa/:id", verifyUser, adminOnly, deleteCasa);
export default router;