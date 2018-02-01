const express = require('express');
const router = express.Router();

const ctrlMain = require('../Controllers/ctrlMain');
const ctrlFootball = require('../Controllers/ctrlFootball');
const ctrlGoldenBall = require('../Controllers/ctrlGoldenBall');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/football', ctrlFootball.winnerlist);
router.get('/goldenball', ctrlGoldenBall.winnerlist);

module.exports = router;
