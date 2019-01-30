var express = require('express');
var cors = require('cors');
var router =express.Router();




const iShopping = require('../scraper/imobiles.scrap');
router.get('/',cors(), async function(req, res){
   var items = await iShopping.imobiles().then(result =>{
        return result;

         
    }).catch(err=>{
      console.log(err);
      return;
      
    })

    res.status(200).json(items);


});
module.exports = router;