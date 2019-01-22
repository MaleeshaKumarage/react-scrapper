var express = require('express');
var router =express.Router();

const Telemart = require('../scraper/tmmobiles.scraper');
router.get('/', async function(req, res){
   var data = await Telemart.mobiles().then(result =>{
       return result;
   }).catch(err=>{
       console.log(err);
       return;
   })
    res.status(200).json(data);
   


});
module.exports = router;


