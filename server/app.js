import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import UserRoute from "./routes/User.routes.js";
import LoginRouter from "./routes/Login.routes.js";
import Metodo_admision from "./routes/Metodo_admision.routes.js";
import Aspirante from "./routes/aspirante.js";
import Carrera from "./routes/CarreraS.js";
import Preparatoria from "./routes/Preparatoria.js";
import Domicilio from "./routes/Domicilio.js";
import Datos from "./routes/Datos.js";
import Ingresos from "./routes/Ingresos.js";
import Dependencia from "./routes/Dependencia.js";
import Casa from "./routes/Casa.js";
import Padres from "./routes/Padres.js";
import Obtener from "./routes/ObtenerAspirante.js";
import { store } from "./config/Connection.js";

const app = express();

dotenv.config();

const secret = process.env.SESSION_SECRET;

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(morgan("dev"));
app.use('/upload', express.static('upload'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(UserRoute);
app.use(LoginRouter);
app.use(Metodo_admision);
app.use(Aspirante);
app.use(Carrera);
app.use(Preparatoria);
app.use(Domicilio);
app.use(Datos);
app.use(Padres);
app.use(Ingresos);
app.use(Dependencia);
app.use(Casa);
app.use(Obtener);
export default app;
