var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db/db.json')


/* GET users listing. */
router.get('/datos', function(req, res, next) {
  try{
    res.json(db);

  }catch (error) {
    res.status(5000).json({error:'el servidor no respomde '});
  }
});


router.use(bodyParser.json());

router.post('/datos', (req, res) => {
  const jsonData = req.body;
  console.log('Datos recibidos:', jsonData);
  res.json({ message: 'Datos recibidos con éxito' });
});





 

module.exports = router;
