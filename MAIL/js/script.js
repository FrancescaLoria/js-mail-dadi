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

//console.log(userMail);

// 2. CONTROLLARE SE SIA NELLA LISTA DI CHI PUO' ACCEDERE
let registrato = false;
for (i = 0; i < registereds.length; i++) {
  const currentEmail = registereds[i];
  console.log(currentEmail);
  if (userMail === currentEmail) {
    registrato = true;
  }
}
// STAMPARE MESSAGGIO SULL'ESITO DEL CONTROLLO
if (registrato) {
  console.log("Sei iscritto");
} else {
  console.log("Mi spiace, non sei iscritto!");
}
