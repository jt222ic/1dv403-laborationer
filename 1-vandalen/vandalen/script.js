"use strict";

var makePerson = function(persArr){

                      /* skapar Arrays för åldrar */

         ///* påvbörja siffror

var NumberArr = [];
var NameArr = [];
var p;
var names;
                                      /*persArr innehåller många objects */

for (p = 0; persArr[p]; p+=1)
{                                    /* varför array?, samma som string från uppgift 2 */
	NumberArr[p] = persArr[p].age    /* tar objectet Age, loopar genom åldrar */
}


for ( p= 0; persArr[p]; p+=1 )
{
	NameArr[p] = persArr[p].name  /* tar objectet Name,  looopar genom namn */
}


NameArr.sort(function (a,b) { return a.localeCompare(b, 'sv'); });  /* sortering av givna namn referens lucas*/
console.log(NameArr[0])



names = NameArr;

var MinAge;   /* hur? */
var MaxAge;    /* hur? */
var AverageAge; /* hur?*/


console.log(NumberArr[2]);             //* har fått alla åldar för alla lärare

  MinAge = NumberArr[p];
  
  

console.log(MinAge);
console.log(names);




                                                    /* john Häggerud  object 1*/	 


                                                    
result = (MinAge, names); 

return result;

                                      

	
} 


var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);



