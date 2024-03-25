const express = require("express");
const app = express();
const PORT = 3000;
const exphbs = require("express-handlebars");

/* STATIC */
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist/"));

//Handlebars
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
  })
);

app.set("view engine", "handlebars");


app.get("/", (req, res) => {
  res.render("Dashboard", {
    layout: "Dashboard",
    productos: [
      { nombre: "banana", img: "/assets/img/banana.png" },
      {
        nombre: "cebollas",
        img: "/assets/img/cebollas.png",
      },
      {
        nombre: "lechuga",
        img: "/assets/img/lechuga.png",
      },
      {
        nombre: "papas",
        img: "/assets/img/papas.png",
      },
      {
        nombre: "pimenton",
        img: "/assets/img/pimenton.png",
      },
      {
        nombre: "tomate",
        img: "/assets/img/tomate.png",
      },
    ],
  });
});

// Ruta Genérica
app.get("*", (req, res) => {
  res.send("Esta página no existe");
});

app.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT}`);
});