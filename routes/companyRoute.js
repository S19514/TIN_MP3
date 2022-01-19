
const express = require('express');
const { route } = require('.');
const router = express.Router();
const companyController = require('../controllers/FirmaController')

router.get('/',companyController.showCompanyList);
router.get('/add',companyController.showAddCompanyForm);
router.get('/edit/:frmId',companyController.showEditCompanyForm);
router.get('/details/:frmId',companyController.showCompanyDetails);
router.post('/add', companyController.addCompany);
router.post('/edit', companyController.updateCompany);
router.get('/delete/:frmId', companyController.deleteCompany);


// router.get('/',warehouseController.showWarehouseList);
// router.get('/add',warehouseController.showAddWarehouseForm);
// router.get('/edit/:magId',warehouseController.showEditWarehouseForm);
// router.get('/details/:magId',warehouseController.showWarehouseDetails);
// router.post('/add', warehouseController.addWarehouse);
// router.post('/edit', warehouseController.updateWarehouse);
// router.get('/delete/:magId', warehouseController.deleteWarehouse);


module.exports = router;
