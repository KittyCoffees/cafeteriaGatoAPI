const express = require("express");
const router = require('./rotas')
const bebidaController= require("./modules/bebida");
const comidaController= require("./modules/comida");

const app = express();
app.use(express.json());

app.post("/bebida", (req, res) => {
    const bebida = req.body;
    const code = bebidaController.create(bebida);
    res.status(code).json();
  });
  
  app.get("/bebida", (req, res) => {
    const bebidas = bebidaController.index();
    res.json(bebidas);
  });
  
  app.get("/bebida/:id", (req, res) => {
    const bebida = bebidaController.show(req.params.id);
    res.json(bebida);
  });
  
  app.put("/bebida/:id", (req, res) => {
      const bebida = req.body
      const code = bebidaController.update(req.params.id, bebida)
      res.status(code).json()
  })
  
  app.delete("/bebida/:id", (req, res) => {
      bebidaController.destroy(req.params.id)
      res.json()
  })

  //comida
  app.post("/comida", (req, res) => {
    const comida = req.body;
    const code = comidaController.create(comida);
    res.status(code).json();
  });
  
  app.get("/comida", (req, res) => {
    const comidas = comidaController.index();
    res.json(comidas);
  });
  
  app.get("/comida/:id", (req, res) => {
    const comida = comidaController.show(req.params.id);
    res.json(comida);
  });
  
  app.put("/comida/:id", (req, res) => {
      const comida = req.body
      const code = comidaController.update(req.params.id, comida)
      res.status(code).json()
  })
  
  app.delete("/comida/:id", (req, res) => {
      comidaController.destroy(req.params.id)
      res.json()
  })

app.listen(3000, ()=> console.log("server rodando.."));    