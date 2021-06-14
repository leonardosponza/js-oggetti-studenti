var studente = {
    nome: 'leonardo',
    cognome: 'sponza',
    età: '25'
}

for(var key in studente){
    document.getElementById("studente").innerHTML += studente[key];
}