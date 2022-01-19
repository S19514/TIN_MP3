const express = require('express');
const { route } = require('.');
const router = express.Router();
const warehouseController = require('../controllers/MagazynController')

router.get('/',warehouseController.showWarehouseList);
router.get('/add',warehouseController.showAddWarehouseForm);
router.get('/edit/:magId',warehouseController.showEditWarehouseForm);
router.get('/details/:magId',warehouseController.showWarehouseDetails);
router.post('/add', warehouseController.addWarehouse);
router.post('/edit', warehouseController.updateWarehouse);
router.get('/delete/:magId', warehouseController.deleteWarehouse);

module.exports = router;
