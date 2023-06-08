import {
    AgregandoCarreraS,
    ActualizandoCarreraS,
    getCarreraS,
    getCarreraSs,
    deleteCarreraS
} from "../controllers/CarreraS.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/carrera_solicitada", verifyUser, AgregandoCarreraS);
router.put("/carrera_solicitada", verifyUser, ActualizandoCarreraS);

router.get("/carrera_solicitada", verifyUser, adminOnly, getCarreraSs);
router.get("/carrera_solicitada/:id", verifyUser, adminOnly, getCarreraS);
router.delete("/carrera_solicitada/:id", verifyUser, adminOnly, deleteCarreraS);
export default router;