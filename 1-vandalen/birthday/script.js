"use strict";

window.onload = function(){

	
	var birthday = function(date){
	
	

    var nowDate = new Date();
    var endDate = new Date(date);
     
var difference = ((nowDate.getTime()-endDate.getTime())/(1000*60*60*24));
                                                                       console.log((endDate.getTime()-nowDate.getTime())/(1000*60*60*24) );
                                                               console.log(nowDate);
                                                                       console.log(endDate);
                                                                          console.log(difference);
                                                                 
                                                             
                                                                              /*om subrtraktion blir mindre än 0 så returnerar man värden 0 */
                                       
	                                                                 /* varför tog jag return 0; */


var day = endDate.getDate()-nowDate.getDate();
var month = endDate.getMonth()- nowDate.getMonth();
if(day === 0 && month === 0)
{                                                                   /* fick fram födelsedag */
	return 0;
}

if (day === -1 && month ===0)                      /* här gör jag att det ska returnaa imorgon eftersom dagen är inte lika med -1 */
{                                                     /* allstå under 1 dag  */
	return 1;                                        /* returnera 1 eftersom vid case 2 = "du fyller om 1 dag " */
}

             return Math.floor(difference);        /* returnera dagarna mellan födelsedagen o den dagen nu */
                                                   /* math.floor för avrundning */
             console.log(Math.floor(date)) 

        console.log((endDate.getTime()-nowDate.getTime())/(1000*60*60*24)-1 );


if (date === "")
		{ 
			throw new Error("FEL! ange ditt födelsedatum igen");
		}



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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};