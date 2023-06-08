/**Importamos las dependencias que se encuentran en el package.json */
import dotenv from "dotenv";

//Config and variables
dotenv.config();
const PORT = process.env.APP_PORT || 4000;

import app from "./app.js";


//Listen App
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});

