// [DADI]
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//GENERO UN NUMERO RANDOM DA 1 A 6 SIA PER IL GIOCATORE CHE PER IL COMPUTER.
let userRandomNumber = Math.floor(Math.random() * 6) + 1;
let computerRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(userRandomNumber, computerRandomNumber);

// STABILISCO IL VINCITORE IN BASE AL NUMERO PIU' ALTO.
if (userRandomNumber > computerRandomNumber) {
  console.log("Hai vinto!");
} else if (computerRandomNumber > userRandomNumber) {
  console.log("Ha vinto il PC!");
} else {
  console.log("Pareggio!");
}
