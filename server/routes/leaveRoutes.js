const express = require('express');
const authController = require('../controller/authController');
const leaveController = require('../controller/leaveController');



const router = express.Router();



router.
route('/')
.get(leaveController.getAllLeave)
.post(leaveController.createLeave)


router.
route('/:id')
.patch(authController.protect, leaveController.updateLeave)



module.exports = router;