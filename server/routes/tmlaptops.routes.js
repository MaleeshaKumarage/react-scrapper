var express = require('express');
var router =express.Router();

const Telemart = require('../scraper/tmlaptops.scraper');
router.get('/', async function(req, res){
   var data = await Telemart.laptops().then(result => {
       return result;
   }).catch(err=>{
       console.log(err);
       return;
   })
       res.status(200).json(data);
       
});
module.exports = router;

