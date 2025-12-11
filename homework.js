var giornisettimana = ["lunedi","martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"];

var meleRimanenti = 5

for (i=0; i<giornisettimana.length; i++){
   
console.log(giornisettimana[i] + " " + (i+1));
console.log ("Ho "+ meleRimanenti + " mele");

// Se sono rimaste 2 mele o meno → stop al mangiare
if (meleRimanenti <= 2) {
    console.log ("Da oggi non posso mangiare mele");
   console.log ("-----------");
   break;
   }

 // Se è mercoledì → salto la mela
if (giornisettimana[i] == "mercoledi"){  
console.log ("Il mercoledì non mangio mele!");
console.log ("Mi rimangono "+ meleRimanenti + " mele");
console.log ("-----------")
    }

    // Caso normale → mangio una mela
else {
console.log ("Magnio una mela");
meleRimanenti--;
console.log ("Mi rimangono "+ meleRimanenti + " mele");
console.log ("-----------")
}
}

console.log ("Ho 2 mele e non posso più mangiarle. Saluti")
