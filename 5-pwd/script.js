"use strict";    /// steg 3

var desktop = {
    
    bildarray:{},

    
    hej:true,
    
    init:function(){

        
        var picButton = document.getElementById("picbutton");
        picButton.addEventListener("click", function(){                                         
            if(desktop.hej === true)          
            {                                                                             /// desktop true skapar och false icke.
                desktop.hej = false;
                desktop.createPicwindow()                                            ///** körs  en gång  så placerar jag det på create window så det inte öppnas flera desktop
            }
            
            });
           
        

           
       
        
                                                   //** syntax måste man ha för att kalla till functionen ()   **//
    },
    
    
    
    createPicwindow:function(){
        
        var topbar= document.createElement("div");                           ///* topbaren **///
        var windArea= document.createElement("div");
                                                                        //*div taggar för windows applikationer 
        var picwind= document.createElement("div");
        var removebutton= document.createElement("img");                  ///*img tagg för att jag ska ha bilder
        var loading=document.createElement("img");
        
        var footer=document.createElement("div");
           
        
       var minGallery = document.createElement("img");
       
        var p = document.createElement("p");
        var content= document.getElementById("content");
        
                 // hämtar img tagg elementen från pic  ///
     
        removebutton.addEventListener("click",desktop.removeWindow);     /// här sker main.program och hur det ska gå denna ska gå till main metoden.
        
        loading.src = "pics/ajax-loader.gif";
        topbar.innerHTML = "";                //** för att leta efter vart elementerna hamnar i html
        footer.innerHTML="Loading...";
        
       
        minGallery.src="pics/vector.svg";
        minGallery.id="minGallery";
        minGallery.innerHTML="hej";
        
        windArea.id="windArea";                                                           ///** samling av ids för att hitta i css och innerhtml för htl
        picwind.id="picwind";
        topbar.id="topbar";
        loading.id="loading";
        footer.id="footer";
        
        
        removebutton.id="removebutton";
        removebutton.src="pics/remove.png";
        p.innerHTML="Gallery";
       
       p.appendChild(minGallery);
       
       
        topbar.appendChild(p);
        
                //   försöker lägga in här istället för att fixa i  css
        topbar.appendChild(removebutton);
        
       
        
         picwind.appendChild(topbar);
        picwind.appendChild(footer);
       
         picwind.appendChild(windArea);
                                                                ///** loading gif ska komma in i content  
                                                                                                ///*** använder för senare tillfälle för länkade server för bilderna.
        content.appendChild(picwind);
        
        
                        
        
       var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)
            {                                                                                   ///*bilden bör komma in **
                footer.innerHTML = "";
                desktop.bildarray = JSON.parse(xhr.responseText);
                
                desktop.renderPictures(windArea);
            }
            else
            {
                footer.appendChild(loading);                                ///***
            }

        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);      ///* server xML requestar server att hämta in **///
        xhr.send(null);              //**säänder en tom **//
    
        
    },
    
    renderPictures:function(windArea){
        
        var container=document.getElementById("container");
        container.id="container";
        for (var i = 0; i < desktop.bildarray.length; i++) {     //** loopar igenom bild area   referens: lw22gz jt222ii och mig själv;
            var imgAtag = document.createElement("a");
            imgAtag.href = "#";
            imgAtag.id = "bildAtaggar";
            var img = document.createElement("img");
            img.src = desktop.bildarray[i].thumbURL;
            img.style.height = desktop.bildarray[i].thumbHeight;
            img.style.width = desktop.bildarray[i].thumbWidth;
            imgAtag.imageurl = desktop.bildarray[i].URL;
            imgAtag.onclick = desktop.changeBackground;
            imgAtag.appendChild(img);
            windArea.appendChild(imgAtag);
            
        }
           
        
    },
    
     mouseUp:function(e){      ///* steg 4 räknas ej in 
        this.mouseup = null;
    },
    
     mouseDown:function(e){
    this.parentNode.style.zIndex = desktop.z++;    ///**steg 4 om jag har tid över
         this.onmousemove = desktop.moveWindow;
},

removeWindow:function(){                          //7** functionen för att ta bort windows applikationer  **//
        desktop.hej = true;                       
        this.parentNode.parentNode.remove();
},
   
  
    
   changeBackground:function(){                                        //** change background image
        document.body.style.backgroundImage = "url("+this.imageurl+")";
    },

    };
window.onload= desktop.init;