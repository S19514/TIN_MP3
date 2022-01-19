const express = require('express');
const router = express.Router();

const prcApiController = require('../../api/PracownikAPI');

router.get('/', prcApiController.getPracownicy);
router.get('/:prcId', prcApiController.getPracownikById);
router.post('/', prcApiController.createPracownik);
router.put('/:prcId', prcApiController.updatePracownik);
router.delete('/:prcId', prcApiController.deletePracownik);

module.exports = router;