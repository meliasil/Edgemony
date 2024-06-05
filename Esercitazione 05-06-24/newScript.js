
const divParent = document.querySelector('.container');
const buttonOneEl = document.querySelector('.buttonOne');
const buttonTwoEl = document.querySelector('.buttonTwo');
const buttonThreeEl = document.querySelector('.buttonThree');


divParent.addEventListener("click", (event) => {
    const eventTarget = event.target


    if(eventTarget.tagName === 'BUTTON' && eventTarget.className === "buttonOne") {
        
        console.log('sono button one') 

    } else if (eventTarget.tagName === 'BUTTON' && eventTarget.className === "buttonTwo") {
    
        console.log('sono button two')

} else if (eventTarget.tagName === 'BUTTON' && eventTarget.className === "buttonThree") {
    
    console.log('sono button three')
}})

//////////////////////////////////////



function logThisAndEventTarget (event) {
    console.log(this);
    console.log(event.target);
}

buttonOneEl.addEventListener('click', logThisAndEventTarget);

/////////////////////////////////////


const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const closeBtn = document.getElementsByClassName('.close');

btn.onclick = function() {
    modal.style.display = 'block';
    
    setTimeout(function() {
        modal.style.display = 'none';
    }, 5000);
}

modal.onclick = function () {
    modal.style.display = 'none';
}


window.onclick = function (event) {
    if (event.target == closeBtn) {
        modal.style.display = 'none';
    }
}



/////////////////////////////////////



/* console.log(buttonOneEl.className);

buttonOneEl.addEventListener("click", () => {
    console.log('sono button one')
});
 */

/* buttonTwoEl.addEventListener("click", () => {
    console.log('sono button two')
}); */

//Ascoltiamo dal div

/* divParent.addEventListener("click", (event) => {
    const eventTarget = event.target


    if(eventTarget.tagName === 'BUTTON' && eventTarget.className === "button_one") {
        
        console.log('sono button one') 

    } else if (eventTarget.tagName === 'BUTTON') {
    
        console.log('sono button two')

} else if (eventTarget === 'UL' || eventTarget.tagName === 'LI') {
    
    console.log('sono nella lista')

} else {
    
    console.log('sono soltanto il div da fuori')
}})

//Il vantaggio è aggiungere l'eventListener al parent e specificarlo agli elementi con l'if e il target. Così l'ebento si propaga cliccando il target e non tutto il div



//SCOPE


function myFunction () {
    console.log(this.name)
}


const newObj = {
    name: 'pippo',
    age: '25',

    test() {*/
        /* console.log(newObj.name) */
        /* console.log(this.name) */
        /* this.secondaFn() */
        /* console.log('ciao sono pippo e ho'+' '+ this.age +' ' + 'anni')
    },

    secondaFn: myFunction,
}

newObj.test()

console.log(newObj)

newObj.secondaFn()
 */


//CLASSI

/* class Car {
    constructor(nome, porte, colore, marchio) {
        this.carNome = nome;
        this.carPorte = porte;
        this.carColore = colore;
        this.carMarchio = marchio;
    }

    getCarInfo() {
        return 'La mia macchina si chiama'+' '+this.carNome+' '+'e ha'+' '+this.carPorte+ ' '+ 'porte'
    }
}

const Ford = new Car('pippo', 5, 'blue', 'Ford')


console.log(Ford)

console.log(Ford.getCarInfo());

 */