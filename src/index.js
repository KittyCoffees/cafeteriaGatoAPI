const express = require("express");
const router = require('./rotas')
const bebidaController= require("./modules/bebida");
const comidaController= require("./modules/comida");
const funcionarioController= require("./modules/funcionario");
const clienteController= require("./modules/cliente");
const gatoController= require("./modules/gato");
const gatilController= require("./modules/gatil");
const pedidoController= require("./modules/pedido");

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
    // res.status(200).send(`
    // "nome":
    // "preco":
    // "tipo": (quente ou gelada)`)
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
    // res.send(`
    // "nome":
    // "preco":
    // "tipo": (doce ou salgada)`)
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
    // res.status(200).send(`
    // "nome":`)
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
    // res.status(200).send(`
    // "nome":`)
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

// gatinhos

app.post("/gato", (req, res) => {
  const gato = req.body;
  const code = gatoController.create(gato);
  res.status(code).json();
});

app.get("/gato", (req, res) => {
  const gatos = gatoController.index();
  res.json(gatos);
});

app.get("/gato/:id", (req, res) => {
  const gato = gatoController.show(req.params.id);
  res.json(gato);
});
app.put("/gato/:id", (req, res) => {
  const gato = req.body;
  const code = gatoController.update(req.params.id, gato);
  res.status(code).json();
});

app.delete("/gato/:id", (req, res) => {
  gatoController.destroy(req.params.id);
  res.json();
});


app.delete("/funcionario/:id", (req, res) => {
   funcionarioController.destroy(req.params.id)
  res.json()
})

// gatil

app.post("/gatil", (req, res) => {
  const gatil = req.body;
  const code = gatilController.create(gatil);
  res.status(code).json();
});

app.get("/gatil", (req, res) => {
  const gatil = gatilController.index();
  res.json(gatil);
});

app.get("/gatil/:id", (req, res) => {
  const gatil = gatilController.show(req.params.id);
  res.json(gatil);
});
app.put("/gatil/:id", (req, res) => {
  const gato = req.body;
  const code = gatoController.update(req.params.id, gato);
  res.status(code).json();
});

app.delete("/gatil/:id", (req, res) => {
  gatilController.destroy(req.params.id);
  res.json();
});

// pedidos

app.post("/pedido", (req, res) => {
  const pedido = req.body;
  const code = pedidoController.create(pedido);
  res.status(code).json();
});

app.get("/pedido", (req, res) => {
  const pedidos = pedidoController.index();
  res.json(pedidos);
});

app.get("/pedido/:id", (req, res) => {
  const pedido = pedidoController.show(req.params.id);
  res.json(pedido);
});
app.put("/pedido/:id", (req, res) => {
  const pedido = req.body;
  const code = pedidoController.update(req.params.id, gato);
  res.status(code).json();
});

app.delete("/pedido/:id", (req, res) => {
  pedidoController.destroy(req.params.id);
  res.json();
});

app.listen(4000, ()=> console.log("server rodando.."));    