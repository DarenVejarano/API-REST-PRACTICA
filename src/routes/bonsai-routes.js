const express = require('express');
const router = express.Router();
const bonsaiController = require('../controllers/bonsai-controller');

router.get('/', bonsaiController.listarTodos);
router.get('/:id', bonsaiController.obtenerPorId);
router.get('/search', bonsaiController.buscar);
router.post('/calculate', bonsaiController.calcular);

module.exports = router;
