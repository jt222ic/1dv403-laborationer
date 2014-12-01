"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		
		
    
	var jan = [i];                       /* skapa en array för att loopa igenom varje bokstav*/
	jan = str.split("");           /* splittra string till arrays */
   var i= 0;                        /*variablar */
                                    /* bokstäver blir utsplittrad inom arrays */
    						
	
		for (i; i < str.length; i +=1)      /* måste loopa annars blir bara den första bokstaven */
		{                                         /* som förändras */
			if (jan[i] === jan[i].toUpperCase() )
			{	jan[i] = jan[i].toLowerCase();	}   /* omvandlingprocess lowercase, uppercase  */
		
			else 
			{	jan[i] = jan[i].toUpperCase();	}  /* vad  jag har lärt mig */
		}
	                                                
		
	
   
   
   
	
    
    str = jan.toString();
    
	str = str.split(",").join("");          // här sker omvandlingen a,A till hashtags
	str = str.split("a").join("#");         /// komma till ingenting
	str = str.split("A").join("#");
	
	                     /* returnerar sträng */          

 if (str === "")
{
	throw new Error("hej du har inte skrivit in någonting ")
	                                                           /* kastar ett undantag felmeddelande */
}



	if (str === "fuck" || str === "FUCK")
	{
	alert("inga svordomar!" )                               /* provar alert */
	}



return [str];
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};