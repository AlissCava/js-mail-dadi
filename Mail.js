// Creiamo un array con le email autorizzate
const listaEmailAutorizzate = ["utente1@example.com", "utente2@example.com", "utente3@example.com"];

// Chiediamo all'utente di inserire la sua email
const emailUtente = prompt("Inserisci la tua email:");

// Verifichiamo se l'email dell'utente è presente nella lista
if (listaEmailAutorizzate.includes(emailUtente)) {

     // Se è presente, stampiamo un messaggio di accesso consentito
     console.log("Accesso consentito. Benvenuto!");
} 
else {
     // Se non è presente, stampiamo un messaggio di accesso negato
     console.log("Accesso negato. La tua email non è autorizzata.");
}