const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.sendFile(path.resolve(__dirname, '../views/index.html'));
  res.render('../views/index.ejs');
});

module.exports = router;
