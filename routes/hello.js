var express = require('express');
var router = express.Router();

router.get('/:imie', (req, res, next) => {
    res.send('Witaj !' + req.params.imie)
  })
 module.exports = router;

