// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

//1. Somma dei prezzi di un carrello (prices) - funzione per calcolo + loop for
//2. Aggiungi alla somma il costo di spedizione, e se il costo e' inferiore o uguale a 100 - condizione
//3. Crea una nuova lista di utenti e un nuovo array con tutti gli utenti inclusi nello sconto isAmbassador
//4. Applica uno sconto extra ai clienti speciali - isAmbassador
//5. Stampa o ritorna il risultato finale - totale carrello e shipping cost se incluso o no

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

// Crea una nuova lista di utenti e un nuovo array con tutti gli utenti inclusi nello sconto isAmbassador
let utenti = [marco, paul, amy];
let indice = utenti.push(
  {
    name: "Sam",
    lastName: "Storm",
    isAmbassador: true,
  },
  {
    name: "Fred",
    lastName: "Green",
    isAmbassador: false,
  }
);
console.log(utenti);

let subscription = prompt("Inserisci la proprieta'");
if (subscription in utenti) {
  console.log(
    `Il valore attuale di ${subscription} e' ${utenti[subscription]}`
  );
} else {
  console.log("Non esiste");
}

const prices = [34, 5, 2];
const shippingCost = 50;
//let addedPrices = prices.push(34, 41);
//console.log(addedPrices);
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

function checkout(prices) {
  if (!prices) return;

  //somma degli elementi compresi nell'array e calcolo finale del carrello senza sconti //
  let cartTotal = 0;
  for (let i = 0; i < prices.length; i++) {
    cartTotal += prices[i];
  }
  console.log("Il totale del tuo acquisto e'" + cartTotal + "$");

  // aggiungi alla somma il costo di spedizione - <=100 //
  const minShippingPrice = 100;

  if (cartTotal >= minShippingPrice) {
    console.log("Spedizione gratuita inclusa!");
  } else {
    console.log("+ costi di spedizione:" + shippingCost + "$");
    cartTotal += shippingCost;
    console.log(cartTotal);
  }

  return cartTotal;
}

let cartCheckout = checkout(prices);
