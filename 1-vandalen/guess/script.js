"use strict";
							
window.onload = function(){
	
 // Detta tal behöver bytas ut mot ett slumpat tal.
var min=1;
var max=100;
var count=0;

	var secret= Math.floor( Math.random() * (max-min)+1 )+min; Math.floor( Math.random() * (100-1)+1) + 1; 
Math.floor( Math.random() * 100)+1;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number);    // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.



if (number <= min || number > max)
{
		return[false, "talet är untanför intervallet 0-100"]     //* vet inte varför man ska ha den längst upp för att koden ska fungera *//
	}


if(+number === secret) 
{
 return [ true, " Grattis du vann! det hemliga talet var "+ secret +" du behövde "+ count +" gissningar för att hitta det."]
}

else if( number < secret)
{
	count++;
	return [false, " Det hemliga talet är högre!"]
}
else if(number> secret)                

{
	count++;
return 	[false, "Det hemliga talet är lägre!"]
}

else if (isNaN(number))   /* bool värde*/
{
	return[false , " icke tal!"]        /// is NAn kan inte läsa tal 
}







		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	
	
	
	
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};