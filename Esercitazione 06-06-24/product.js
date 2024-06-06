
fetch('https://fakestoreapi.com/products').then((res) => {
    return res.json();
}).then((products) => {
    console.log(products)
})

const containerEl = document.querySelector('.container');

fetch('https://fakestoreapi.com/products').then((res) => {
    return res.json();
}).then((products) => {
    

    products.forEach(items => {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'card-product';
        const cardProductTitle = document.createElement('h1');
        const cardProductImg = document.createElement('img');
        cardProductImg.className = '.image';
        cardProductTitle.className = 'titleEl';
        cardProductTitle.textContent = items.title;
        cardProductImg.src = items.image;

        cardProduct.append(cardProductImg, cardProductTitle)
        console.log(cardProduct)
        
        containerEl.append(cardProduct);

})})



//// HO PROVATO A FARE IL 4 ESERCIZIO MA HO AVUTO DIFFICOLTà:


/* const buttonContainer = document.createElement('div');
const buttonAppear = document.createElement('button');
buttonAppear.className = 'buttonCatalogue';
buttonAppear.textContent = 'Apri catalogo';

buttonContainer.appendChild(buttonAppear);
containerEl.append(buttonContainer);


buttonAppear.addEventListener('click', function () {
    const cards = document.querySelector('.card-product')
    for (let item in cards) {
        if (item.style.display === 'none') {
            item.style.display = 'block';
        } 
    }
}) */
