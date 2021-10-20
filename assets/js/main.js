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

const userLevel = parseInt(prompt('Seleziona il livello di difficoltà', '[1/2/3]'));


cellGenerator(userLevel)


//funzione per generare le celle
function cellGenerator(number) {

    var number
    var x

    if (number === 1) {
        x = 100;
    } else if (number === 2) {
        x = 81;
    } else if (number === 3) {
        x = 49;
    }


    //generare gli elementi con un loop
    for (let i = 0; i < x; i++) {

        //creare gli elementi da generare
        const cellEl = document.createElement('div');
        //attribuire una classe all'elemto creato
        cellEl.className = 'grid_cell';
        //appendere gli elementi generati all'elemento selezionato dalla DOM 
        containerEl.append(cellEl);



        //aggiungere un eventListener agli elementi
        cellEl.addEventListener('click', function () {
            this.style.backgroundColor = '#03a9f4'
        })
    }
}

