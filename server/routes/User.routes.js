import { Router } from "express";
import {
    AddUser
} from "../controllers/User.controllers.js";

const router = Router();

router.post("/user", AddUser);

export default router;




