const express = require('express');
const router = express.Router();

router.use('/api', require('./api'))
// router.use("/user", require("./oauth"));
router.get('/', function(req, res){
    return res.send('Server Status: OK');
});

module.exports = router;