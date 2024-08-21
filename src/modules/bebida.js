
const db = [];
let proxID = 1;

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

function model(bebida, id = proxID++) {
    if (bebida.nome != undefined &&
        bebida.nome != "" &&
        bebida.preco != undefined &&
        bebida.preco != "" &&
        bebida.tipo != undefined &&
        bebida.tipo != "") {
        return {
            id,
            nome: bebida.nome,
            preco: bebida.preco,
            tipo: bebida.tipo
        }
    }
};
function create(body) {
    const novo = model(body);

    if (novo) {
        db.push(novo)
        return 201;
    }
    return 400;
}
function update(id, body) {
    const index = db.findIndex((el) => el.id ==id);
    const novo = model(body, parseInt(id));

    if (novo && index!= -1) {
        db[index] = novo;
        return 200;
    }
    return 400;
};

function destroy(id) {
    const index = db.findIndex((el) => el.id == id);

    if (index != -1) {
        db.splice(index, 1);
    }
};

module.exports = {
    create,
    show,
    index,
    update,
    destroy
}