// ` 
const nomeUtente = prompt("What's your name?");
const cognomeUtente = prompt("What's your surname?")
const coloreUtente = prompt("What's your favorite color?");



// elemento id in html
const divDatiUtente = document.getElementById("dati-utente");


//valore proprietà .innerHTML 
divDatiUtente.innerHTML = `${nomeUtente}${cognomeUtente}${coloreUtente}22`;

console.log(`${nomeUtente} ${cognomeUtente} ${coloreUtente}22`);