picbutton.addEventListener("keydown", function(e) {
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
                    
                    
                    
                    var picButton = document.getElementById("aTagOpenP");
        picButton.addEventListener("click", htmldesktop.createPicwindow);    ///**  pic button