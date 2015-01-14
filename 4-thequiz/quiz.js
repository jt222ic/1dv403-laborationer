"use strict";

var quiz = {                                    //* windows onload istället *//
     Tries: 0,                                     //** tries startar på 0 **//
    tryArr: [],
    serverObj: null,                                                ///*referens lw222gz github  *///
    
    init:function(){
        var input = document.getElementById("svar");
        quiz.renderQuestion("http://vhost3.lnu.se:20080/question/1")                //* länkning till en domän server *// // varför måste det vara http istället för https *//
        document.getElementById("button").addEventListener("click", function(e){
                    if (input.value !== "")
                    {
                        quiz.answerQuestion(input.value, quiz.serverObj.nextURL)   /** samma princip som nedan **///
                    }
                    else
                    {
                        e.preventDefault();      //* förhindra eventet **//
                    }
                })
                
        input.addEventListener("keydown", function(e) {
                    if (e.keyCode === 13)    ///*inmatning  unicode = ENTER.knapp *///
                    {
                        if (input.value !== "")            //* om man inte skriver någonting ska eventet prevent default förekomma */
                        {
                            quiz.answerQuestion(input.value, quiz.serverObj.nextURL)       //* besvara frågan  om den har en värde skickas till nextUrl*//
                        }
                        else
                        {
                            e.preventDefault();
                        }
                    }
                })
    },    
        
    renderQuestion: function(url){
        quiz.Tries = 1;      //* frågor att loopa igenom  här för alla frågor!! *//
        var serverQuestion = document.getElementById("question");
        var XHR = new XMLHttpRequest();
        var input = document.getElementById("svar");                      //*tar elementet från svar * från indexen//
        input.value = "";                                             ///* inmatning för svar  INPUT* Tom eftersom man ska kunna inmata vad som helst*//
        
        XHR.onreadystatechange = function(){ 
            if (XHR.readyState === 4 && XHR.status === 200)   //* redo för frågan *//
            {
                quiz.serverObj = JSON.parse(XHR.responseText);                               ///* infs 100% men nläseds
                serverQuestion.innerHTML = quiz.serverObj.question;                      ///* frågo  *//
            }
        }
        XHR.open("GET",url , true)
        XHR.send(null)
    },
    
    answerQuestion: function(answer, url){
        var xhr1 = new XMLHttpRequest();            //* skapar en ny object  **///
        var i;
        
        var status = document.getElementById("questionStatus")  //* elementet från questionstatus*//
        
        xhr1.onreadystatechange = function(){
             if (xhr1.readyState === 4)   ///** emter ***//
             {
                var response = JSON.parse(xhr1.responseText);   //* json.parse respons från server *///
                if (response.message === "Correct answer!")           //** besvvara koden **//
                {
                    
                    if (response.nextURL !== undefined)              ///* om svaret inte finns hoppar den ner till fel svar annars  **///
                    {
                        quiz.tryArr.push(quiz.Tries)
                        quiz.renderQuestion(response.nextURL)     //** rätt svar  **///
                        status.innerHTML = "Rätt svar!"
                        console.log(quiz.tryArr)
                    }
                    else
                    {
                        quiz.tryArr.push(quiz.Tries)
                        status.innerHTML = "Du klara dig! Resultat:"       
                        document.getElementById("button").disabled = true;
                        document.getElementById("svar").value = "";
                        document.getElementById("svar").disabled = true;
                        for (i = 1; i < quiz.tryArr.length + 1; i +=1)
                        {
                            var pTag = document.createElement("p")
                            pTag.innerHTML = "Fråga "+i+": "+quiz.tryArr[i-1]+" försök"
                            status.appendChild(pTag);
                        }
                    }
                }
                else
                {
                    quiz.Tries += 1;
                    document.getElementById("svar").value = "";
                    console.log(quiz.tryArr)
                    status.innerHTML = "Fel svar!"
                }
            }
        }
        var sendAnswer = JSON.stringify({answer: answer})   //* svar på frågan samma svar som server kräver. **//
        xhr1.open("POST",url , true)        
        xhr1.setRequestHeader("Content-type", "application/json")
        xhr1.send(sendAnswer)
        
    },
}
window.onload = quiz.init;