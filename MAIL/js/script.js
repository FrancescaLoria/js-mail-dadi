// [MAIL]
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1. CHIEDIAMO ALL'UTENTE LA SUA MAIL.
const registereds = [
  "pinco@gmail.com",
  "pallo@gmail.com",
  "francesca@gmal.com",
  "giovanni@gmail.com",
];
console.log(registereds);

const userMail = prompt("inserisci la tua mail").toLowerCase();

console.log(userMail);
