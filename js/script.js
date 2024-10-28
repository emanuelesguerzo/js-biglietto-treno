//DATI
let travelDistance = prompt("Inserisci il numero di chilometri che vuoi percorrere");
let userAge = prompt("Inserisci la tua età");
let kmPrice = 0.21;

//ESECUZIONE LOGICA
let userAgeNum = parseInt(userAge);
let distance = parseInt(travelDistance);
let basePrice = distance * kmPrice;
let finalPrice;

if (isNaN(distance) || isNaN(userAgeNum) || distance <= 0 || userAgeNum <= 0) {
    console.log("Errore: Assicurati di inserire numeri positivi! Ricarica la pagina!");
} else if (userAgeNum >= 65) {
    finalPrice = (basePrice / 100) * 60;
} else if (userAgeNum < 18) {
    finalPrice = (basePrice / 100) * 80;
} else {
    finalPrice = basePrice;
}



//OUTPUT
console.log("Prezzo del biglietto: " + parseFloat(finalPrice.toFixed(2)) + "€");
