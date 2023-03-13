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

const emailImput = document.querySelector(".email-input");
const button = document.querySelector(".button");
const resultDiv = document.querySelector(".result");

button.addEventListener("click", function () {
  resultDiv.classList.remove("error");
  resultDiv.classList.remove("success");
  resultDiv.innerHTML = "";

  if (emailImput.value !== "") {
    // 2. CONTROLLARE SE SIA NELLA LISTA DI CHI PUO' ACCEDERE
    let registrato = false;
    for (i = 0; i < registereds.length; i++) {
      const currentEmail = registereds[i];
      console.log(currentEmail);
      if (emailImput.value === currentEmail) {
        registrato = true;
      }
    }
    // STAMPARE MESSAGGIO SULL'ESITO DEL CONTROLLO
    let message = "";
    let elementClass = "";
    if (registrato) {
      message = "Sei iscritto";
      elementClass = "success";
    } else {
      message = "Mi spiace, non sei iscritto!";
      elementClass = "error";
    }

    resultDiv.classList.add(elementClass);
    resultDiv.innerHTML = message;
  }
});
