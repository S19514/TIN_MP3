const express = require('express');
const { route } = require('.');
const router = express.Router();
const employeeController = require('../controllers/PracownikController')
const authUtils = require('../util/authUtils.js');


router.get('/',employeeController.showEmployeeList);
router.get('/add',authUtils.permitAuthenticatedUser,employeeController.showAddEmployeeForm);
router.get('/edit/:prcId',authUtils.permitAuthenticatedUser,employeeController.showEditEmployeeForm);
router.get('/details/:prcId',authUtils.permitAuthenticatedUser,employeeController.showEmployeeDetails);
router.post('/add', authUtils.permitAuthenticatedUser,employeeController.addEmployee);
router.post('/edit', authUtils.permitAuthenticatedUser,employeeController.updateEmployee);
router.get('/delete/:prcId',authUtils.permitAuthenticatedUser, employeeController.deleteEmployee);


module.exports = router;