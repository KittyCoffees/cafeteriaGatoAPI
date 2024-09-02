const funcionarioController = require('./funcionario');
const gatoController = require('./gato');
const pedidoController = require('./pedido');

const db = [];
let proxID = 1;

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

function model(gatil, id = proxID++) {
    if (
        gatil.funcionarioId != undefined &&
        gatil.pedidoId != undefined &&
        gatil.gatoId != undefined
    ) {
        const pedido = pedidoController.show(gatil.pedidoId);

        return {
            id,
            funcionarioId: gatil.funcionarioId,
            gatoId: gatil.gatoId,
            pedido: {
                id: pedido.id,
                clienteId: pedido.clienteId,
                comidaId: pedido.comidaId,
                bebidaId: pedido.bebidaId,
                funcionarioId: pedido.funcionarioId,
            },
        };
    }
    return null;
}

function create(body) {
    const funcionarioExiste = funcionarioController.show(body.funcionarioId);
    const gatoExiste = gatoController.show(body.gatoId);
    const pedidoExiste = pedidoController.show(body.pedidoId);

    if (funcionarioExiste && gatoExiste && pedidoExiste) {
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
    
    const funcionarioExiste = funcionarioController.show(body.funcionarioId);
    const gatoExiste = gatoController.show(body.gatoId);
    const pedidoExiste = pedidoController.show(body.pedidoId);

    if (funcionarioExiste && gatoExiste && pedidoExiste) {
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