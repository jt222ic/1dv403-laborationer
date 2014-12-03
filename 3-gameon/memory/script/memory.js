"use strict";

var memory= {
    
    
    showbox: document.createElementId("show"),
    Tries: 0,
    PairsFound: 0,
    Ids: 0,
    picArray:null,
    check: true,
    firstClick: null,
    TurnedOver: 0,
    rows: 4,
    cols: 4,
    AmountofPairs: 8,
    
    init:function()
    
    { memory.picArray = RandomGenerator.getPictureArray(4,4);
    memory.createBoard()
    console.log(memory.picArray);
},



createBoard: function(){
    
    
    
    var table = document.createElementId("table")
    var i;
    var j;
    
    for( i = 0; i <memory.rows; i+=1)
    {
        var TableRow = document.createElement("tr");
        var Cell = document.createElement("td");
        var img = document.createElement("img");
        
        aTag.img = img;
        
        memory.Ids += 1
        
        aTag.addEventlistener("click",memory.onClick)
        
        aTag.appendChild(img);
        Cell.appendChild(aTag);
        TableRow.appendChild(Cell)
    }
    table.appendChild(TableRow);
}
var GameBoard = document.getElementById("playboard");
GameBoard.appendChild(table);

},

onClick: function(){
    
    if (memory.check === true)
    {
        memory.TurnedOver +=1;
        this.img.src = this.img.className;
        this.removeEventListener("click", memory.onClick);
        
        if (memory.TurnedOver === 2)
        {memory.Tries +=1;
        memory.check = false;
        memory.TurnedOver = 0;
        var secondClick = this;
        if (memory.firstClick.img.className ===memory.AmountofPairs)
        {
            memory.ShowBox.innerHTML = " du har vunnit! Det tog dig "+memory.Tries+" försök. Tryck F5 för ny omgång";
        }
        memory.check = true;
    }
    else
    {
        setTimeout(function()){
            memory.firstClick.img.src = "pics/0.png";
            secondClick.img.src =" pics/0.png";
            memory.firstClick.addEventListener("click", memory.onClick);
            secondClick.addEventListener("click", memory.onClick)
            memory.check = true;
        }, 1000)
        
        
    }
    if ( memory.PairFound< memory.AmountofPairs)
    {memory.ShowBox.innerHTML = "Du har hittat "+memory.PairsFound+" av "+memory.picArray.length/2+". "memory.Tries+ "försök gjorde hittills."
}

}
}
if (memory.TurnedOver ===1)
{
    memory.firstClick = this;
}

},
}



window.onload = memory.init;