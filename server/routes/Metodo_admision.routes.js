import { Router } from "express";
import { verifyUser, adminOnly } from "../middleware/Autentificacion.js";
import {
    AgregandoMetodo,
    ActualizandoMetodo,
    getMetodo,
    getMetodos,
    deleteMetodo
} from "../controllers/Metodo_admision.js";

const router = Router();


router.post("/metodo_admision", verifyUser, AgregandoMetodo);
router.put("/metodo_admision/:id", verifyUser, ActualizandoMetodo);

router.get("/metodo_admision", getMetodos);
router.get("/metodo_admision/:id", getMetodo);
router.delete("/metodo_admision/:id", adminOnly, deleteMetodo);


export default router;