var path = "img/";

for (var i=1; i<cart.length; i++){

var pId = cart[i].itemId;

$("main").append("<div class='product'></div>");
$("main>div:nth-child("+i+")").attr("id", "product"+pId);

$("#product"+pId).append("<p class='names'></p>");
$("main > div:nth-child("+i+") p:first").text(cart[i].name);

$("#product"+pId).append("<img class='pix'>");
$("main>div:nth-child("+i+") img:first").attr("src", path + cart[i].imgUrl);

$("#product"+pId).append("<div class='statusContainer'></div>");
$("#product"+pId+">div:first").attr("id", "stCont"+pId);
 
$("#stCont"+pId).append("<p class='price'></p>");
$("#stCont"+pId).append("<p class='status'></p>");
$("#stCont"+pId+" p.price").attr("id", "price"+pId);
$("#stCont"+pId+" p.status").attr("id", "status"+pId);

$("#price"+pId).text(cart[i].price + " €");
$("#status"+pId).text(cart[i].status + " pcs");

};


$("body").css({"margin":"0","padding":"0","font-family":"Verdana"});

$("h1").css({"background-color":"darkcyan","color":"white","text-align":"center","margin":"0","padding":"1.5em"});
$("main").css({"background-color":"lightblue","display":"flex","flex-wrap":"wrap"});

$(".product").css({"width":"350px", "background-color":"white","margin":"2em","border-radius":"2em","position":"relative" }); //
$(".names").css({"text-align":"center","font-weight":"bold","font-size":"2em","color":"darkcyan"});
$("img").css({"width":"100%","height":"auto"});

$(".statusContainer").css({"width":"100%", "position":"relative", "bottom":"0"}); //
$(".price").css({"text-align":"center","font-size":"4em", "font-weight":"900","text-align":"center","margin":"0"});
$(".status").css({"font-size":"1.5em","font-weight":"700", "text-align":"center"});	