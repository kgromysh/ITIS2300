$(document).ready(function(){
          
          //Change style button
           $("#button").click(function(){
           $("#imgBig").css("border", "solid 5px");
           $("#Validation").css("background-color" , "#7FFFD4");
           
           });
           //Change jquerry button
           $("#button2").click(function(){
           $("h1").toggle(4000);
           //pictures on the left will slide up
           $("#01").slideUp(4000);
           $("#03").slideUp(4000);
           $("#05").slideUp(4000);
           //pictures on the right will fade out
           $("#02").fadeOut(4000);
           $("#04").fadeOut(4000);
           $("#06").fadeOut(4000);
           
           });
           
           //Left Column click)
           $("#01").click(function(){
	 $("#imgBig").attr("src","imgLab10/01.jpg");		
           });
           
           $("#03").click(function(){
	 $("#imgBig").attr("src","imgLab10/03.jpg");		
           });
           
           $("#05").click(function(){
	 $("#imgBig").attr("src","imgLab10/05.jpg");		
           });
           
            //Right Column hover()
           // $("#imgBig").mouseout(function(){

           $("#02").hover(function(){
	       $("#imgBig").attr("src","imgLab10/02.jpg");             
           });
		   
		   $("#02").mouseout(function(){
           $("#imgBig").attr("src","imgLab10/07.jpg");     
           });
           
           $("#04").hover(function(){
	       $("#imgBig").attr("src","imgLab10/04.jpg");
           });
		   
		   $("#04").mouseout(function(){
           $("#imgBig").attr("src","imgLab10/07.jpg");     
           });
           
           $("#06").hover(function(){
	       $("#imgBig").attr("src","imgLab10/06.jpg");
           });
		   
		   $("#06").mouseout(function(){
           $("#imgBig").attr("src","imgLab10/07.jpg");     
           }) ;
           
           
});
