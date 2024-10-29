//DATI
let travelDistance = prompt("Inserisci il numero di chilometri che vuoi percorrere");
let userAge = prompt("Inserisci la tua età");
let kmPrice = 0.21;
let underageDiscount = 20;
let seniorDiscount = 40;
const userAgeNum = parseInt(userAge);
const distance = parseInt(travelDistance);

//CONTROLLO UTENTE
if (isNaN(distance) || isNaN(userAgeNum) || (distance === null) || (userAgeNum === null) || distance <= 0 || userAgeNum <= 0) {
    console.log("Errore: Assicurati di inserire numeri positivi! Ricarica la pagina!");
} else {

    //ESECUZIONE LOGICA
    let basePrice = distance * kmPrice;
    let discountPercent;

    if (userAgeNum < 18) {
        discountPercent = underageDiscount;
    } else if (userAgeNum >= 65) {
        discountPercent = seniorDiscount;
    } else {
        discountPercent = 0;
    }

    const discountValue = basePrice / 100 * discountPercent;
    const finalPrice = basePrice - discountValue;

    //OUTPUT
    const message = `Abbiamo applicato lo sconto del ${discountPercent}% - ${discountValue.toFixed(2)}Euro. Quindi il tuo prezzo finale e' di ${finalPrice.toFixed(2)}Euro`
    console.log(message);
}


