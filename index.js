const express = require("express");
//App
const app = express();
//BD
const db = require("./models/database.js")

//Uso de Express
app.use(express.json())
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la APP" });
  });
  app.get("/*", (req, res) => {
    res.json({ message: "No hay mas info" });
  });
require("./routes/transacciones.js")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor esta levantado en el puerto: ${PORT}.`);
});
