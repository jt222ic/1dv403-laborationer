{"changed":true,"filter":false,"title":"random.js","tooltip":"/3-gameon/memory/script/random.js","value":"\n\n\nvar RandomGenerator = {\n\t\n\t/*\n\t\tDenna metod tar antalet rader och columner som inparameter.\n\t\t\n\t\tMetoden returnerar en array inneh�llandes utslumpade tal mellan 1 och (rows*cols)/2. Varje tal representeras tv�\n\t\tg�nger och motsvarar s�ledes en spelbricka. \n\t\t\n\t\tI en 4*4 matris kan Arrayen t.ex. se ut s� h�r:\n\t\t[1,2,6,8,6,2,5,3,1,3,7,5,8,4,4,7]\n\t\t\n\t\tI en 2*4 matris kan Arrayen t.ex. se ut s� h�r:\t\t\t\t\n\t\t[3,4,4,1,2,1,2,3]\n\t*/\n\t\n\tgetPictureArray: function(rows, cols)\n\t{\n\t\tvar numberOfImages = rows*cols;\n\t\tvar maxImageNumber = numberOfImages/2;\n\t\n\t   \tvar imgPlace = [];\n\t\n\t   //Utplacering av bilder i Array\n\t   for(var i=0; i<numberOfImages; i++)\n\t\t  imgPlace[i] = 0;\n\t\n\t\tfor(var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++)\n\t\t{\t\t\n\t\t\tvar imageOneOK = false;\n\t\t\tvar imageTwoOK = false;\n\t\t\t\n\t\t\t\n\t\t\tdo\n\t\t\t{\n\t\t\t\tif(imageOneOK == false)\n\t\t\t\t{\n\t\t\t\t\tvar randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tif( imgPlace[randomOne] == 0 )\n\t\t\t\t\t{\n\t\t\t\t\t\timgPlace[randomOne] = currentImageNumber;\n\t\t\t\t\t\timageOneOK = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif(imageTwoOK == false)\n\t\t\t\t{\n\t\t\t\t\tvar randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\tif( imgPlace[randomTwo] == 0 )\n\t\t\t\t\t{\n\t\t\t\t\t\timgPlace[randomTwo] = currentImageNumber;\n\t\t\t\t\t\timageTwoOK = true;\n\t\t\t\t\t}\n\t\t\t\t}\t\t\t\n\t\t\t}\n\t\t\twhile(imageOneOK == false || imageTwoOK == false);\t\t\n\t\t}\n\t\t\n\t\treturn imgPlace;\n\t}\n}\n","undoManager":{"mark":0,"position":3,"stack":[[{"group":"doc","deltas":[{"start":{"row":29,"column":26},"end":{"row":30,"column":0},"action":"insert","lines":["",""]},{"start":{"row":30,"column":0},"end":{"row":30,"column":3},"action":"insert","lines":["\t\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":2,"column":0},"end":{"row":2,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417607252661}