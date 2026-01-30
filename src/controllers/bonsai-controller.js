const bonsais = require('../data/bonsais.json');

exports.listarTodos = (req, res) => {
    res.json(bonsais);
};
exports.obtenerPorId = (req, res) => {};
exports.buscar = (req, res) => {};
exports.calcular = (req, res) => {};
