/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
 */



/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

const memberTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',	
        foto: './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',	
        foto: './assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',	
        foto: './assets/img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',	
        foto: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',	
        foto: './assets/img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',	
        foto: './assets/img/barbara-ramos-graphic-designer.jpg'
    },

];

console.log('MILESTONE 0');
console.log(memberTeam);


/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 */

//creo un ciclo che mi scorre nell'array tramite un 'forin'

console.log('MILESTONE 1');
for (const key in memberTeam) {

    //creo una variabile cosi da non riscrivere tante volte 'memberTeam[key]'
    const member = memberTeam[key];

    console.log(member);
    console.log(member.nome); //utilizzo la dot notation
    console.log(member.ruolo); //utilizzo la dot notation
    console.log(member['foto']); //utilizzo la bracket notation
    // posso utilizzare entrambi i modi in questo caso 
    
};

/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
 */

const teamsElDom = document.querySelector('.teams');

for (const key in memberTeam) {

    //creo una variabile cosi da non riscrivere tante volte 'memberTeam[key]'
    const member = memberTeam[key];

    //creo il markup che voglio per le card
    const markup = 
    `<div class="col-4">
    <h3 class="mt-5 mt-3 p-4 text-center">Membro con la stringa al posto dell'immagine:</h3>
    <ul class="list-group">
        <li class="list-group-item"><strong>${member.nome}</strong></li>
        <li class="list-group-item">${member.ruolo}</li>
        <li class="list-group-item">${member.foto}</li>
    </ul>
    </div>`;
    
    teamsElDom.insertAdjacentHTML('beforeend', markup);

};

/* BONUS 1:
Trasformare la stringa foto in una immagine effettiva ☑️


 BONUS 2:
Organizzare i singoli membri in card/schede ☑️
 */

for (const key in memberTeam) {

    //creo una variabile cosi da non riscrivere tante volte 'memberTeam[key]'
    const member = memberTeam[key];

    //creo il markup che voglio per le card
    const markup = 
    `<div class="col-4">
    <h3 class="mt-5 mt-3 p-4 text-center">Membro con le immagini:</h3>
    <ul class="list-group">
        <li class="list-group-item"><strong>${member.nome}</strong></li>
        <li class="list-group-item">${member.ruolo}</li>
        <li class="list-group-item"><img src="${member.foto}"></li>
    </ul>
    </div>`;
    
    teamsElDom.insertAdjacentHTML('beforeend', markup);

};


//bonus Extra 
//possibilità di aggiungere membri

const addMemberEl = document.querySelector('button.add-member');

//creo un eventlistener dal bottone 'aggiungi'

addMemberEl.addEventListener('click', function() {

    //ottengo i valori dall'input dell utente
    const firstNameEl = document.querySelector('.first-name').value;
    const lastNameEl = document.querySelector('.last-name').value;
    const roleMemberEl = document.querySelector('.role-member').value;

    //mi assicuro che non ci siano campi vuoti
    if(firstNameEl != '' && lastNameEl != '' && roleMemberEl != '') {
        
        //pusho nell'array i dati che ha inserito l'utente
        memberTeam.push({
            nome: firstNameEl + ' ' + lastNameEl,
            ruolo: roleMemberEl,	
            foto: 'https://picsum.photos/400/300'
        });

        //invoco la funzione per stampare la card in pagina
        newMember(memberTeam);

    } else { 
        
        //se ci sono campi vuoti
        alert('compila Tutti i campi!')
    };

});


//creo una funzione per aggiungere un nuovo membro
function newMember (choseArray) {

        //creo una variabile cosi da non riscrivere tante volte 'memberTeam[key]'
        const lastMember = (choseArray.length) - 1;
        const member = choseArray[lastMember];
    
        //creo il markup che voglio per le card
        const markup = 
        `<div class="col-4">
        <h3 class="mt-5 mt-3 p-4 text-center">Membro con le immagini:</h3>
        <ul class="list-group">
            <li class="list-group-item"><strong>${member.nome}</strong></li>
            <li class="list-group-item">${member.ruolo}</li>
            <li class="list-group-item"><img src="${member.foto}"></li>
        </ul>
        </div>`;
        
        teamsElDom.insertAdjacentHTML('afterbegin', markup);
}






