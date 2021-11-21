const express = require('express');
const router = express.Router();

// Controller
const orders = require('../../../controllers/api/v1/orders')

router.get("/updatestatus", orders.statusUpdate);
router.get("/details", orders.getOrder);

module.exports = router;