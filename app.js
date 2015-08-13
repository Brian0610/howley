$(function(){


	$('div.brand').hover(
		function(){
			$(this).animate({top: "-.5em"}, 200); 		
			
		}, 
		function(){
			$(this).animate({top: "0em"}, 200); 
			
		}
	); 

$('div.info').hover(
		function(){
			$(this).animate({top: "-.5em"}, 200);
			var img = $(this).children('img.info'); 
			var source = img.attr("src");
			if( source == "images/team1.png"){
				$(this).children('img.info').attr("src","images/team2.png"); 
			} 

			else if( source == "images/sales1.png" ){ 
				$(this).children('img.info').attr("src","images/sales2.png"); 
			}

			else if( source == "images/shake1.png" ){ 
				$(this).children('img.info').attr("src","images/shake2.png"); 
			}

		}, 
		function(){
			$(this).animate({top: "0em"}, 200); 
			var img = $(this).children('img.info'); 
			var source = img.attr("src");
			if( source == "images/team2.png"){
				$(this).children('img.info').attr("src","images/team1.png"); 
			} 

			else if( source == "images/sales2.png" ){ 
				$(this).children('img.info').attr("src","images/sales1.png"); 
			}

			else if( source == "images/shake2.png" ){ 
				$(this).children('img.info').attr("src","images/shake1.png"); 
			}

	}); 

})



