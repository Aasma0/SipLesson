const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/authorizationMiddleware");
const categoryController = require("../Controllers/categoryController");

/**
 * @description To get all categories
 * @api /api/category/create
 * @access PUBLIC
 * @type POST
 * @return response
 */

router.post("/create", auth, authorizeRole('admin'), categoryController.addCategory);

module.exports = router;