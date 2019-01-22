var request = require('request');
var cheerio = require('cheerio');
    
   exports.laptops = () =>{
   
    var laptops = [];
    return new Promise((resolve, reject)=>{
 request('https://www.telemart.pk/computer.html', function(error, response, html){
    if(!error && response.statusCode==200){
        var $ = cheerio.load(html);
        $('.pro-title', html).each(function(i, element){
            var item =  {}
            var list =  $(this);
            item.title = list.text();
            item.newPrice = list.next().children().children().children('.special-price').children('.price').text();
            item.oldPrice = list.next().children().children().children('.old-price').children('.price').text();
            item.url = list.children().attr('href');
  
             item.image = list.parent().parent().prev().children('.product-image-w').attr('src');
        
         
             laptops.push(item);
             
               console.log(laptops);
        
        })   
    }

    resolve(laptops);

});
    })
  };
  
     
