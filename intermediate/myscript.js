$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

// $("form").remove();

for (let i=0;i<5;i++){
var newDiv = $("<div id="+	i+"> neues div "+(i+1)+"</div>");
$("article").append(newDiv);
}

$("article div").addClass("box");

$("#msg").val("Search for ...");

$("footer a").attr("href","http://www.codefactory.wien")