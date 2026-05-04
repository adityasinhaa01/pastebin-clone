const express = require('express');
const genPasteId = require('../Controllers/url');
const router = express.Router();

router.post('/', genPasteId);

module.exports = router;