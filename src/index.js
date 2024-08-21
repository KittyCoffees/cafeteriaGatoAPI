const express = require("express");
const router = require('./rotas')
const bebidaController= require("./modules/bebida");
const comidaController= require("./modules/comida");

const app = express();
app.use(express.json());

app.get('/', (req,res)=> res.status(200).send(`
Bem vindos ao Kittycoffes!!
Gostaria de fazer um pedido e visitar nossos gatinhos?
`))
app.post("/bebida", (req, res) =>{
    const bebida = req.body;
    const code = bebidaController.create(bebida);
    res.status(code).json();
  });
  
  app.get("/bebida", (req, res) => {
    res.status(200).send(`
    "nome":
    "preco":
    "tipo": (quente ou gelada)`)
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
    res.status(200).send(`
    "nome":
    "preco":
    "tipo": (doce ou salgada)`)
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

  //cliente 

  app.post("/cliente", (req, res) => {
    const cliente = req.body;
    const code = clienteController.create(cliente);
    res.status(code).json();
  });
  
  app.get("/cliente", (req, res) => {
    res.status(200).send(`
    "nome":`)
    const clientes = clienteController.index();
    res.json(clientes);
  });
  
  app.get("/cliente/:id", (req, res) => {
    const cliente = clienteController.show(req.params.id);
    res.json(cliente);
  });
  
  app.put("/cliente/:id", (req, res) => {
      const cliente = req.body
      const code = clienteController.update(req.params.id, cliente)
      res.status(code).json()
  })
  
  app.delete("/cliente/:id", (req, res) => {
      clienteController.destroy(req.params.id)
      res.json()
  })

  //funcionario

  app.post("/funcionario", (req, res) => {
    const funcionario = req.body;
    const code = funcionarioController.create(funcionario);
    res.status(code).json();
  });
  
  app.get("/funcionario", (req, res) => {
    res.status(200).send(`
    "nome":`)
    const funcionarios = funcionarioController.index();
    res.json(funcionarios);
  });
  
  app.get("/funcionario/:id", (req, res) => {
    const funcionario = funcionarioController.show(req.params.id);
    res.json(funcionario);
  });
  
  app.put("/funcionario/:id", (req, res) => {
      const funcionario = req.body
      const code = funcionarioController.update(req.params.id, funcionario)
      res.status(code).json()
  })
  
  app.delete("/funcionario/:id", (req, res) => {
      funcionarioController.destroy(req.params.id)
      res.json()
  })

app.listen(4000, ()=> console.log("server rodando.."));    