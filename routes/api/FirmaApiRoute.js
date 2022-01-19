const express = require('express');
const router = express.Router();

const frmApiController = require('../../api/FirmaAPI');

router.get('/', frmApiController.getFirmy);
router.get('/:frmId', frmApiController.getFirmaById);
router.post('/', frmApiController.createFirma);
router.put('/:frmId', frmApiController.updateFirma);
router.delete('/:frmId', frmApiController.deleteFirma);

module.exports = router;