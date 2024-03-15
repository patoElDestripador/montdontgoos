const express = require("express");

const UsersController = require("../controller/users.controller.js");
const router = express.Router();

router.get('/', UsersController.index);
router.get('/user', UsersController.getUserbyQueryParam);

module.exports = router;
