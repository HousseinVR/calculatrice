import { items, items2 } from "./class.js";

// CREATION DE MA DIV 
let container = document.createElement('div');
// Je rajoute ma div a mon body en temps qu'enfant
document.body.appendChild(container)
// je nomme le nom de ma classe calculator
container.classList.add('calculator')

// creation de ma div
let calculatrice = document.createElement('div');
//  je rajoute ma div ds container
container.appendChild(calculatrice);
// le nom de ma classe
calculatrice.classList.add('myDiv1')

// creation de ma div
let operator = document.createElement('div');
container.appendChild(operator)
operator.classList.add('myDiv2')

// creation de ma div
let containerResult = document.createElement('div');
document.body.appendChild(containerResult)
containerResult.classList.add('containerResult')


// je creer un input
let divResult = document.createElement('input');
// je le rajoute a ma div container result
containerResult.appendChild(divResult)
divResult.classList.add('divResult');

// je boucle mon objet items qui se trouve ds classe.js
items.forEach(item => {
    // je creer mon boutton 
    let button = document.createElement("button");
    // je donne le nom de mon boutton
    button.textContent = item.nom;
    // je donne la classe de mon boutton
    button.classList.add('btn');
    // je rajoute mon boutton en temps qu'enfant de ma claculatrice
    calculatrice.appendChild(button);
    // évenemnt clic pour tout les items
    button.addEventListener('click',()=>{
        if (button.innerHTML == 1) {
            divResult.value += 1;
        }if (button.innerHTML == 2) {
            divResult.value += 2;
        }if (button.innerHTML == 3) {
            divResult.value += 3;
        }if (button.innerHTML == 4) {
            divResult.value += 4;
        }if (button.innerHTML == 5) {
            divResult.value += 5;
        }if (button.innerHTML == 6) {
            divResult.value += 6;
        }if (button.innerHTML == 7) {
            divResult.value += 7;
        }if (button.innerHTML == 8) {
            divResult.value += 8;
        }if (button.innerHTML == 9) {
            divResult.value += 9;
        }if (button.innerHTML == 0) {
            divResult.value += 0
        }if (button.innerHTML == "Clear" ){
            divResult.value = '';
        }if (button.innerHTML == "="){          
            divResult.value = Math.round(parseInt(eval(divResult.value)));
        }
    })
});



// je boucle tout mes items2 qui se trouve dans classe.js
items2.forEach(item => {
    // je creer mon boutton pour chaque item (items2)
    let button = document.createElement("button");
    // je rajoute du texte pour tout mes items
    button.textContent = item.nom;
    // je donne un nom a ma classe
    button.classList.add('btn2');
    // je rajoute mon boutton en temps qu'enfant de operateur
    operator.appendChild(button)
    // événement click pareil
    button.addEventListener('click',()=>{
        if (button.innerHTML ==  '+') {
            divResult.value += '+'
        }if (button.innerHTML == '-') {
            divResult.value += '-'
        }if (button.innerHTML == '*') {
            divResult.value += '*'
        }if (button.innerHTML == '/') {
            divResult.value += '/'
        }
    })
});
