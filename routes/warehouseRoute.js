const express = require('express');
const { route } = require('.');
const router = express.Router();
const warehouseController = require('../controllers/MagazynController')
const authUtils = require('../util/authUtils.js');


router.get('/',warehouseController.showWarehouseList);
router.get('/add',authUtils.permitAuthenticatedUser,warehouseController.showAddWarehouseForm);
router.get('/edit/:magId',authUtils.permitAuthenticatedUser,warehouseController.showEditWarehouseForm);
router.get('/details/:magId',authUtils.permitAuthenticatedUser,warehouseController.showWarehouseDetails);
router.post('/add',authUtils.permitAuthenticatedUser, warehouseController.addWarehouse);
router.post('/edit', warehouseController.updateWarehouse);
// router.post('/edit',authUtils.permitAuthenticatedUser, warehouseController.updateWarehouse);
router.get('/delete/:magId',authUtils.permitAuthenticatedUser, warehouseController.deleteWarehouse);

module.exports = router;
