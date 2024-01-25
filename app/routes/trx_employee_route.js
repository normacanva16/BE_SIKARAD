const dotEnv = require('dotenv');
const { Router } = require('express');

//Validation

const { validate } = require('../helpers/utilities/validate');

const upload = require('../helpers/utilities/upload');

const EmployeeController = require('../controllers/TRXEmployeeController');
const { verifyToken } = require('../helpers/authentication-jwt');
const authorize = require('../helpers/authorize');

const router = Router();
dotEnv.config();

router.post('',upload.multerUploadFile,EmployeeController.uploadfileexcel);
router.get('', EmployeeController.listByAksiId);
router.get('/:id', EmployeeController.view);
router.get('/download/excel', EmployeeController.exportListEmployee);
router.get('/detail/list', EmployeeController.viewEmployeeByJabatan);

module.exports = router;
