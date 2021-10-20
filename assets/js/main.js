/*
L'utente indica un livello di difficoltà
in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:

- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49


Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/


//selezionare l'elemento della DOM 
const containerEl = document.querySelector('.container');
console.log(containerEl);

//generare gli elementi con un loop
for (let i = 0; i < 100; i++) {

    //creare gli elementi da generare
    const cellEl = document.createElement('div');
    console.log(cellEl);
    //attribuire una classe all'elemto creato
    cellEl.className = 'grid_cell';
    //appendere gli elementi generati all'elemento selezionato dalla DOM 
    containerEl.append(cellEl);



    //aggiungere un eventListener agli elementi
    cellEl.addEventListener('click', function () {
        this.style.backgroundColor = '#03a9f4'
    })
}
