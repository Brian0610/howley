$(document).ready(function(){

	//set the width of #slide-reel...
		var slideNum = $('div.slide').length;		
		var sWidth = 600; 
		console.log(sWidth);	 
		var tWidth = sWidth * slideNum; //calculate total width of #slide-reel
		$('#slide-reel').css("width", tWidth);  

	//Initilize Slider: 
		//Set the queue so the first slide (in the markup), actually displays first in the viewport
		//This has the OPPOSITE function of slideRun, pushing the last slide to the first position
		var swidth = $('div.slide:last').width();
		var slideClone = $('div.slide').last().clone(); 
		$('div.slide').last().remove();
		slideClone.prependTo('#slide-reel'); 
		showDesc(); 
		slideNav(); 

	//set slider to run automatically, and time duration...
		setInterval(slideRun, 5000); 



}); 
	//changes the nav, animates the slide-wrap to the left 
		//(removes first slide and pushes to end), changes the description	
	function slideRun(){		 		
		var swidth = $('div.slide:first').width();
		var slideClone = $('div.slide').first().clone();  
		$('#slide-reel').css({left: "+=" + swidth + "px"}); 
		$('div.slide').first().remove(); 
		$('#slide-reel').animate({ left: "-=" + swidth + "px"},1000);
		slideClone.appendTo('#slide-reel');	
		slideNav();
		showDesc();	
 	} 	

 	function showDesc(){
 		//look at first slide's ID attritube
 		var slideId = $('div.slide:first').attr("id");  
 		 		  
 		if (slideId === "a"){ 
	 		 $('div.content').removeClass("show"); 
	 		 $('div.content:nth-child(2)').fadeIn(); 
	 		 $('div.content:first').fadeOut();
 		}
 		else if (slideId === "b"){
 			$('div.content').removeClass("show"); 
 			$('div.content:nth-child(3)').fadeIn();
 			$('div.content:nth-child(2)').fadeOut(); 
 		} 
 		else if (slideId === "c"){
 			$('div.content').removeClass("show"); 
 			$('div.content:last').fadeIn();
 			$('div.content:nth-child(3)').fadeOut();
 		} 
 		else if (slideId === "d"){
 			$('div.content').removeClass("show"); 
 			$('div.content:first').fadeIn(); 
 			$('div.content:last').fadeOut();
 		} 		

 	}

 	function slideNav(){
 		//look at first slide's ID attritube
 		var slideId = $('div.slide:first').attr("id"); 
 		console.log(slideId); 
 		if (slideId === "d"){ 
 			$('div.sNav').removeClass("active"); 
 			$('div.sNav:first').addClass("active"); 
 		} 
 		//else if b, add class "active" to 2st div.sNav (etc...)
 		else if (slideId === "a"){
 			$('div.sNav').removeClass("active"); 
 			$('div.sNav:nth-child(2)').addClass("active"); 
 		} 

 		else if (slideId === "b"){
 			$('div.sNav').removeClass("active"); 
 			$('div.sNav:nth-child(3)').addClass("active"); 
 		}

 		else if (slideId === "c"){
 			$('div.sNav').removeClass("active"); 
 			$('div.sNav:last').addClass("active"); 
 		}	

 
 	}
