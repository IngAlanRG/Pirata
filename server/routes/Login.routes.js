import { Router } from "express";
import { login, logOut, Me } from "../controllers/Login.controllers.js";

const router = Router();

router.get('/me', Me);
router.post('/login', login);
router.delete('/logout', logOut);

export default router;