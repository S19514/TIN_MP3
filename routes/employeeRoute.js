const express = require('express');
const { route } = require('.');
const router = express.Router();
const employeeController = require('../controllers/PracownikController')

router.get('/',employeeController.showEmployeeList);
router.get('/add',employeeController.showAddEmployeeForm);
router.get('/edit/:prcId',employeeController.showEditEmployeeForm);
router.get('/details/:prcId',employeeController.showEmployeeDetails);
router.post('/add', employeeController.addEmployee);
router.post('/edit', employeeController.updateEmployee);
router.get('/delete/:prcId', employeeController.deleteEmployee);


module.exports = router;