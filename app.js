// ` 
const nomeUtente = prompt("Tell me about you. What's your name?");
const cognomeUtente = prompt("Tell me about you. What's your surname?");
const annoNascitaUtente = prompt("Tell me about you. What is your year of birth?");
const etaUtente = 2022 - annoNascitaUtente;
const coloreUtente = prompt("Tell me about you. What's your favorite color?");



// elemento id in html
const divDatiUtente = document.getElementById("dati-utente");
const divEtaUtente = document.getElementById("eta-utente");
const divColoreUtente = document.getElementById("colore-utente");


//valore proprietà .innerHTML 
divDatiUtente.innerHTML = `${nomeUtente} ${cognomeUtente}`;
divEtaUtente.innerHTML = `You are ${etaUtente} years old`;
divColoreUtente.innerHTML = `Your favorite color is ${coloreUtente}`;