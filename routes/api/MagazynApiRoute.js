const express = require('express');
const router = express.Router();

const magApiController = require('../../api/MagazynAPI');

router.get('/', magApiController.getMagazyny);
router.get('/:magId', magApiController.getMagazynById);
router.post('/', magApiController.createMagazyn);
router.put('/:magId', magApiController.updateMagazyn);
router.delete('/:magId', magApiController.deleteMagazyn);

module.exports = router;