// ` 
const nomeUtente = prompt("Tell me about you. What's your name?");
const cognomeUtente = prompt("Tell me about you. What's your surname?");
const etaUtente = prompt("Tell me about you. How old are you?");



// elemento id in html
const divDatiUtente = document.getElementById("dati-utente");
const divEtaUtente = document.getElementById("eta-utente");


//valore proprietà .innerHTML 
divDatiUtente.innerHTML = `${nomeUtente} ${cognomeUtente}`;
divEtaUtente.innerHTML = `You are ${etaUtente} years old`