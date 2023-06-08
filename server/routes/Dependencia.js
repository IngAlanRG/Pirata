import {
    insertarDependencia_economica,
    actualizarDependencia_economica,
    getDependencia_economica,
    getDependencia_economicas,
    deleteDependencia_economica
} from "../controllers/Dependencia.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/dependencia", verifyUser, insertarDependencia_economica);
router.put("/dependencia", verifyUser, actualizarDependencia_economica);

router.get("/dependencia", verifyUser, adminOnly, getDependencia_economicas);
router.get("/dependencia/:id", verifyUser, adminOnly, getDependencia_economica);
router.delete("/dependencia/:id", verifyUser, adminOnly, deleteDependencia_economica);
export default router;