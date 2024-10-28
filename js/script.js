//DATI
let travelDistance = prompt("Inserisci il numero di chilometri che vuoi percorrere");
let userAge = prompt("Inserisci la tua età");
let kmPrice = 0.21;

//ESECUZIONE LOGICA
let basePrice = travelDistance * kmPrice;
let finalPrice;

if (userAge >= 65) {
    finalPrice = (basePrice / 100) * 60;
} else if (userAge < 18) {
    finalPrice = (basePrice / 100) * 80;
} else {
    finalPrice = basePrice;
}

//OUTPUT
console.log(finalPrice.toFixed(2))
