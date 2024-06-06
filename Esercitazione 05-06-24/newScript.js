
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
