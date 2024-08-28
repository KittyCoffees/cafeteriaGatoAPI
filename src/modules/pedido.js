const clienteController = require('./cliente');
const comidaController = require('./comida');
const bebidaController = require('./bebida');
const funcionarioController = require('./funcionario');

const db = [];
let proxID = 1;

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

function model(pedido, id = proxID++) {
    if (
        pedido.clienteId != undefined &&
        pedido.comidaId != undefined &&
        pedido.bebidaId != undefined &&
        pedido.funcionarioId != undefined
    ) {
        return {
            id,
            clienteId: pedido.clienteId,
            comidaId: pedido.comidaId,
            bebidaId: pedido.bebidaId,
            funcionarioId: pedido.funcionarioId,
        };
    }
    return null;
}

function create(body) {
    const clienteExiste = clienteController.show(body.clienteId);
    const comidaExiste = comidaController.show(body.comidaId);
    const bebidaExiste = bebidaController.show(body.bebidaId);
    const funcionarioExiste = funcionarioController.show(body.funcionarioId);

    if (clienteExiste && comidaExiste && bebidaExiste && funcionarioExiste) {
        const novo = model(body);
        if (novo) {
            db.push(novo);
            return 201;
        }
    }
    return 400;
}

function update(id, body) {
    const index = db.findIndex((el) => el.id == id);

    const clienteExiste = clienteController.show(body.clienteId);
    const comidaExiste = comidaController.show(body.comidaId);
    const bebidaExiste = bebidaController.show(body.bebidaId);
    const funcionarioExiste = funcionarioController.show(body.funcionarioId);

    if (clienteExiste && comidaExiste && bebidaExiste && funcionarioExiste) {
        const novo = model(body, parseInt(id));
        if (novo && index != -1) {
            db[index] = novo;
            return 200;
        }
    }
    return 400;
}

function destroy(id) {
    const index = db.findIndex((el) => el.id == id);

    if (index != -1) {
        db.splice(index, 1);
        return 200;
    }
    return 400;
}

module.exports = {
    create,
    show,
    index,
    update,
    destroy,
};