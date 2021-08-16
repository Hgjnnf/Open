const express = require('express');
const router = express.Router();
const {displayUser, changeUsername, changePassword} = require('../controllers/profile.js');
const {protect} = require('../middleware/auth');

// GET request for viewing user's own information
router.route('/').get(protect, displayUser);

// PUT request for update username
router.route('/changeusername').put(protect, changeUsername);

// PUT request for updating password
router.route('/changepassword').put(protect, changePassword);

module.exports = router;