import {
    insertarDomicilio,
    actualizarDomicilio,
    getDomicilio,
    getDomicilios,
    deleteDomicilio
} from "../controllers/Domicilio.js";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import { Router } from "express";
const router = Router();

router.post("/domicilio", verifyUser, insertarDomicilio);
router.put("/domicilio", verifyUser, actualizarDomicilio);

router.get("/domicilio", verifyUser, adminOnly, getDomicilios);
router.get("/domicilio/:id", verifyUser, adminOnly, getDomicilio);
router.delete("/domicilio/:id", verifyUser, adminOnly, deleteDomicilio);
export default router;