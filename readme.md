# Esercizio
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.

Bonus:
Applicare dei controlli sull'input dell'utente

## Dati
- Chiedo la tratta in chilometri all'utente.
- Chiedo l'eta' all'utente.
- Prezzo per chilometro

## Esecuzione logica
1. Conversione stringhe in numeri
2. Calcolo del prezzo di base
3. Controllo input utente
4. Calcolo eta'
    - Se eta' e' maggiore o pari a 65 anni: applica sconto 40%
    - Altrimenti se eta' e minore a 18 anni: applica sconto 20%
    - Altrimenti non applicare nulla

## Output
Stampa in console il prezzo finale