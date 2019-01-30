var request = require('request');
var cheerio = require('cheerio');


 exports.iaccessories = () =>{
   
    var iaccessories = [];
    return new Promise((resolve, reject)=>{

   
 request('https://www.ishopping.pk/electronics/mobile-phones-tablet-pc/mobile-phones-prices-in-pakistan.html', function(error, response, html){
    if(!error && response.statusCode==200){
        var $ = cheerio.load(html);
        $('li.col-xs-6', html).each(function(i, element){
            var item =  {}
            var list =  $(this);
        
            // item.title = list.children().children().children().attr('title');
            // item.url   = list.children().children().children().attr('href');
            item.image =list.children('.inner-grid').children('a').children('img').attr('src');
            // item.availability = list.children('div.item-wrap').children('div.pro-info').children('div.pro-inner')
            //                        .children('div.wrap-pio').children().text();
            // item.discount = list.children('.sale-item').children().text();
            // item.newPrice = list.children('.item-wrap').children('.pro-info').children('.pro-inner').children('.pro-content')
            //                 .children('.wrap-price').children('.price-box').children('.special-price').children('.price').text();
            // item.regularPrice =list.children('.item-wrap').children('.pro-info').children('.pro-inner').children('.pro-content')
            //                 .children('.wrap-price').children('.price-box').children('.regular-price').children('.price').text();
            // item.oldPrice =list.children('.item-wrap').children('.pro-info').children('.pro-inner').children('.pro-content')
            //                 .children('.wrap-price').children('.price-box').children('.old-price').children('.price').text();                
                            
             iaccessories.push(item);
             
            //   console.log(mobiles);
        })   
    }

    resolve(iaccessories);

});
    // return mobiles; 
})
}