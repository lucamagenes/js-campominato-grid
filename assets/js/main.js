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

const livelloSelect = document.getElementById('livello');
const buttonInput = document.getElementById('button');


buttonInput.addEventListener('click', function () {

    const userLevel = parseInt(livelloSelect.value);

    cellGenerator(userLevel)

})



//funzione per generare le celle
function cellGenerator(number) {

    var number
    var x

    //condizione per la selezione del livello
    if (number == 1) {
        x = 100;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.add('cont_uno')
    } else if (number == 2) {
        x = 81;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.add('cont_due')
    } else if (number == 3) {
        x = 49;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.add('cont_tre')
    }


    //generare gli elementi con un loop
    for (let i = 1; i <= x; i++) {

        //creare gli elementi da generare
        let cellEl = document.createElement('div');
        //attribuire una classe all'elemto creato
        cellEl.className = 'grid_cell';
        //assegnare il valore ${i} ad ogni elemento
        cellEl.insertAdjacentHTML('beforeend', `<p class="numeri"> ${i} </p>`)
        //appendere gli elementi generati all'elemento selezionato dalla DOM 
        containerEl.append(cellEl);



        //aggiungere un eventListener agli elementi
        cellEl.addEventListener('click', function () {
            this.style.backgroundColor = '#03a9f4'
        })
    }
}

