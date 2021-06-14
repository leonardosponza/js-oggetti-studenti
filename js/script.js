// Creare un oggetto che descriva uno studente, 
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo 
// for-in tutte le proprietà dell'oggetto.


var studente = {
    nome: 'leonardo',
    cognome: 'sponza',
    età: '25'
}

for(var key in studente){
    document.getElementById("studente").innerHTML += studente[key];
}

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti 
// e stampare per ognuno di essi, nome e cognome.

var studenti = [
    {   nome : "il grande",
        cognome  : "stigatsby",
        età : 2000,
    },
    {   nome : "harry",
        cognome  : "tardato",
        età : 30,
    }
];

studenti.push(studente);
console.log(studenti);

for(var i=0 ; i < studenti.length ; i++){
    console.log(studenti)
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


studente = {
    nome: prompt('Inserisci nome'),
    cognome: prompt('Inserisci cognome'),
    eta: parseInt(prompt('Inserisci età'))
};
studenti.push(studente);

console.log(studenti);