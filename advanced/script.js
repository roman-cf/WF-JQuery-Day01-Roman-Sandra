$("a").attr("href","http://www.codefactory.wien");

$("code").css("color", "red");

$("ol > li").css("background-color", "#2a7b90");

$("form textarea").attr("placeholder","Express your opinion");

$("img").attr("src","https://codefactory.wien/wp-content/themes/hestia/cf-images/small-jpg/1-frontend.jpg");

$("blockquote").css({"background-color":"orange", "font-style":"italic"});

$("#logo").css("color","black");
$("h1 span").css("color","white");

$(".date").remove();


menueData = [["New Templates","Oder Template", "Contact Us", "weitrere"],["link.html", "link1.html","link2.html","link3.html"]];
for (let i=0; i<menueData[0].length; i++){
	$("#sidebar ul:first").append("<li><a href='"+menueData[1][i]+"'>"+menueData[0][i]+ "</a></li>")
}

$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.")