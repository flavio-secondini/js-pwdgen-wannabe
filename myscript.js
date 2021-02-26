var nome = prompt("Nome?");

var cognome = prompt("Cognome?");

var colorePreferito = prompt("Colore preferito?");

var password = nome + cognome + colorePreferito + 21;

document.getElementById('password-generated').innerHTML = password;

// AGGIUNTA

var consiglio = "No, non abbiamo investito tantissimo nella sicurezza."

document.getElementById('commento').innerHTML = consiglio;
