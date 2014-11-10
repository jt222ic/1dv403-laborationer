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


names = NameArr.sort(function (a,b) { return a.localeCompare(b, 'sv'); });  /* sortering av givna namn referens lucas*/



names = NameArr.toString();   /* få bort brackets och ""* för att få fram texten*/


var averageAge;
var MinAge;   /* hur? */
var MaxAge;    /* hur? */
           /* hur?*/


/*console.log(NumberArr[2]); */             //* har fått alla åldar för alla lärare

   averageAge = NumberArr.reduce(function(a, b) { return a + b });
 averageAge = averageAge/ NumberArr.length;
  MinAge = Math.min.apply(Math, NumberArr);  /* min value form för att ber'kna minsta värdet i array */
  MaxAge = Math.max.apply(Math, NumberArr);  /* max value form för att berakna största värdet i array*/
  /* provar min value*/
 
 
console.log(MinAge);   /*provning */
console.log(MaxAge);
console.log(names);



/*                                                    /* john Häggerud  object 1*/	 
names = names.split(",").join(", ");   /* det var mellanrum i namn sorteringen enligt index */

                                                     
var result = {averageAge: Math.round(averageAge) ,minAge: MinAge, maxAge: MaxAge, names : names}
console.log(result);
return result;

                                      

	
} 


var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);



