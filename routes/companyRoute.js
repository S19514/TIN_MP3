
const express = require('express');
const { route } = require('.');
const router = express.Router();
const companyController = require('../controllers/FirmaController')
const authUtils = require('../util/authUtils.js');

router.get('/',companyController.showCompanyList);
router.get('/add',authUtils.permitAuthenticatedUser,companyController.showAddCompanyForm);
router.get('/edit/:frmId',authUtils.permitAuthenticatedUser,companyController.showEditCompanyForm);
router.get('/details/:frmId',authUtils.permitAuthenticatedUser,companyController.showCompanyDetails);
router.post('/add', authUtils.permitAuthenticatedUser,companyController.addCompany);
router.post('/edit',authUtils.permitAuthenticatedUser, companyController.updateCompany);
router.get('/delete/:frmId',authUtils.permitAuthenticatedUser, companyController.deleteCompany);

// app.use('/employees',authUtils.permitAuthenticatedUser, employeeRouter);
// app.use('/warehouses',authUtils.permitAuthenticatedUser,warehouseRouter);
// app.use('/companies',authUtils.permitAuthenticatedUser,companyController);

// router.get('/',warehouseController.showWarehouseList);
// router.get('/add',warehouseController.showAddWarehouseForm);
// router.get('/edit/:magId',warehouseController.showEditWarehouseForm);
// router.get('/details/:magId',warehouseController.showWarehouseDetails);
// router.post('/add', warehouseController.addWarehouse);
// router.post('/edit', warehouseController.updateWarehouse);
// router.get('/delete/:magId', warehouseController.deleteWarehouse);


module.exports = router;
