"use strict";

var memory = {
    
    ShowBox: document.getElementById("ShowBox"),
    Tries: 0,
    PairsFound: 0,
    Ids: 0,
    picArray:null,
    check: true,
    firstClick: null,  //* tom variabler*/
    TurnedOver: 0,
    rows: 4,
    cols: 4,
    AmountofPairs: 8,
    
    init:function() {
        memory.picArray = RandomGenerator.getPictureArray(memory.rows, memory.cols)   //* init istället för wndowsunload */
        memory.createBoard();
    },
    
    createBoard: function(){
        
        var table = document.createElement("table");
        var i;                  //* variabler för loop *//
        var j;
        
        for (i = 0; i < memory.rows; i+= 1)
        {
            var TableRow = document.createElement("tr");   /* skapade element för table row */
            table.appendChild(TableRow);
            for (j = 0; j < memory.cols; j += 1)
            {
                var aTag = document.createElement("a")       /// skapade element för A -taggar */
                var Cell = document.createElement("td");      ///* skapade element för Td */
                var img = document.createElement("img");       ///*skapade element för img tag */
                
                aTag.href = "#"
                
                img.src = "pics/0.png"
                img.className = "pics/"+memory.picArray[memory.Ids]+".png"  //* loopa genom 0 siffrig bild upp till hjur många bilder jkaag hjar lasgt in på pic s */
                aTag.img = img;
                
                memory.Ids += 1;  /* +1 för varje bild */
                
                aTag.addEventListener("click", memory.onClick)   
                
                aTag.appendChild(img);            //* hamnar emellen *//
                Cell.appendChild(aTag);
                TableRow.appendChild(Cell);
            }
            table.appendChild(TableRow);
        }
        var GameBoard = document.getElementById("playboard");   //* tar elementet från indexen */
        GameBoard.appendChild(table);                          /* hamnar mellan  table element */ 
    },
    
    
    onClick: function() {
       
       
       if (memory.check === true)
       {
       memory.TurnedOver += 1;                              /* inner.html samma princip som appendchild */
       this.img.src = this.img.className;   //* så första
       this.removeEventListener("click", memory.onClick);    /* knan inte klicka på memo igen efter memory.onclick */
       
           if (memory.TurnedOver === 2)
           {
               memory.Tries += 1;
               memory.check = false;
               memory.TurnedOver = 0;                  //* kollar om två bilder är jämna med secondClick */
               var secondClick = this;
               if (memory.firstClick.img.className === secondClick.img.className)
               {
                   memory.PairsFound += 1;
                   if (memory.PairsFound === memory.AmountofPairs)
                   {
                       memory.ShowBox.innerHTML = "Du har vunnit! Det tog dig "+memory.Tries+" försök. Tryck F5 för ny omgång";
                   }
                   memory.check = true;
               }
               else
               {
                   
                   setTimeout(function(){
                       memory.firstClick.img.src = "pics/0.png";
                       secondClick.img.src = "pics/0.png";
                       memory.firstClick.addEventListener("click", memory.onClick);           /** vänder om 1 sekund om paret är fel */
                       secondClick.addEventListener("click", memory.onClick);
                       memory.check = true;
                   }, 1000)
               }
               if (memory.PairsFound < memory.AmountofPairs)
               {
               memory.ShowBox.innerHTML = "Du har hittat "+memory.PairsFound+" av "+memory.picArray.length/2+". "+memory.Tries+" försök gjorde hittills."
               }
               
           }
       }
       if (memory.TurnedOver === 1)
       {
            memory.firstClick = this;
       }
       
    },
}  

window.onload = memory.init;   /* kör init version utifrån window.unload */