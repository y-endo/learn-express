const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req);
  res.send('post');
});

module.exports = router;
