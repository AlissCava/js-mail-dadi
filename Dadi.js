// gioco_dadi.js

// Funzione per generare un numero casuale da 1 a 6
function generaNumeroCasuale() {
    // Restituisci un numero casuale tra 1 e 6
    return Math.ceil(Math.random() * 6);
    //math.ceil arrotonda per eccesso
}

// Funzione chiamata quando l'utente clicca sul pulsante "Gioca"
function gioca() {
    // Generiamo i punteggi del giocatore e del computer
    const punteggioGiocatore = generaNumeroCasuale();
    const punteggioComputer = generaNumeroCasuale();

    // Determiniamo il vincitore
    const risultato = punteggioGiocatore > punteggioComputer
        ? "Hai vinto!"
        : punteggioComputer > punteggioGiocatore
            ? "Il computer ha vinto."
            : "È un pareggio!";

    // Otteniamo l'elemento HTML con l'id "risultato"
    const risultatoElement = document.getElementById("risultato");

    // Aggiorniamo il contenuto dell'elemento con i risultati del gioco
    risultatoElement.textContent = `Il tuo punteggio: ${punteggioGiocatore} - Punteggio del computer: ${punteggioComputer} - ${risultato}`;
}
