const BASE_URL = "https://api.escuelajs.co/";
const endpoint = "api/v1/products/";

const POST = async () => {
    try{

        const product = {
            title: inputTitleEl.value,
            price: inputPriceEl.value,
            description: inputDescriptionEl.value,
            category: inputCategoryEl.value,
            images: inputImagesEl.value
        }

    const res = await fetch (BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body:JSON.stringify(product)
    })
    const data = await res.json();
    console.log('Dato aggiunto', product.id)

console.log(product.id);


const productID = product.id;
console.log('ID salvato:', productID);
console.log(productID);
return productID;
} catch (error) {
    console.error('Errore', error)
}}


const inputTitleEl= document.querySelector('.title');
const inputPriceEl= document.querySelector('.price');
const inputDescriptionEl= document.querySelector('.description');
const inputCategoryEl= document.querySelector('.category-id');
const inputImagesEl= document.querySelector('.images');
const buttonSendEl= document.querySelector('.button-send');

const product = {
    title: inputTitleEl.value,
    price: inputPriceEl.value,
    description: inputDescriptionEl.value,
    category: inputCategoryEl.value,
    images: inputImagesEl.value
}


buttonSendEl.addEventListener('click', event => {
    inputTitleEl.ariaValueMax;
    event.preventDefault();

    POST(product)
})


const getByID = async (product) => {
    const url = `${BASE_URL}/${product.id}`;
            const response = await fetch(BASE_URL, {
                method: 'GET'
            });
    
            const res = response.json();
            return res;
    
    }
    
console.log('Questo è l\'id', getByID(product.id));
    
    



function updateProduct(product) {
    fetch(`${BASE_URL}${endpoint}${product.id}`, {
        method: 'PUT',
        headers: {
            'Content Type': 'application/json'
        }
    }),
({  body: JSON.stringify(product.id)
})   
.then (res => res.json())
.then (product => {
    console.log('Prodotto aggiornato', product.id);
    getByID(product.id);
})
.catch(error => console.error('Errore nella verifica del prodotto', error))
}




function deleteProduct(product) {
    fetch(`${BASE_URL}${endpoint}${product.id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Prodotto cancellato con successo');
        } else {
            console.error('Errore nella cancellazione del prodotto');
    }
    })
}

deleteProduct(product.id)