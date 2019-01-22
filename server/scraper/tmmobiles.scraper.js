var request = require('request');
var cheerio = require('cheerio');


 exports.mobiles = () =>{
   
    var mobiles = [];
    return new Promise((resolve, reject)=>{

   
 request('https://www.telemart.pk/mobile-and-tablets.html', function(error, response, html){
    if(!error && response.statusCode==200){
        var $ = cheerio.load(html);
        $('div.pro-content', html).each(function(i, element){
            var item =  {}
            var list =  $(this).prev();
        
            item.title = list.text();
            item.url   = list.children().attr('href');
            item.image = list.children().attr('src');
           // item.availability = list.children('div.item-wrap').children('div.pro-info').children('div.pro-inner')
                                  // .children('div.wrap-pio').children().text();
            
            item.newPrice = list.next().children().children().children('.special-price').text();
            item.oldPrice = list.next().children().children().children('.old-price').text()

                            //              var a = $(this).prev();
                            //               var name  = a.text();
                            //               var url = a.children().attr('href');
                            //               var img=a.children().attr('src');
                            //               var price=a.next().children().children().children('.special-price').text();
                            //               var oldPrice=a.next().children().children().children('.old-price').text();
                                               
             mobiles.push(item);
             
            //   console.log(accessories);
        })   
    }

    resolve(mobiles);

});
    // return accessories; 
})
}