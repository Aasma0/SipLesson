const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizationMiddleware');
const { commentImage } = require('../middleware/uploadMiddleware');
const {
  createComment,
} = require('../Controllers/commentController');

/**
 * @description Create a new comment
 * @route POST /api/comments
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the created product
 */
router.post('/', createComment);



module.exports = router;