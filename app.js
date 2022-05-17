// ` 
const nomeUtente = prompt("What's your name?");



// elemento id in html
const spanDatiUtente = document.getElementById("dati-utente");


//valore proprietà .innerHTML 
spanDatiUtente.innerHTML = `${nomeUtente}`