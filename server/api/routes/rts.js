var express = require('express')
var router = express.Router()
var cntrl = require('../controllers/cntrl.js')

router.get('/', function (req, res) {
  res.send('Hello World from root')
})

router.get('/getEvents', cntrl.getEvents);
router.get('/getVenues', cntrl.getVenues);

module.exports = router
