
const BASE_URL = "https://api.escuelajs.co/api/v1/products";

const newItems = {
    "title": "string",
    "price": 10,
    "description": "string",
    "categoryId": 20,
    "images": ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmagazine.arcaplanet.it%2Fgatto%2Fcomportamento-e-gioco-g%2Fmiagolio-gattini-significato-e-consigli-per-gestire-un-gattino-che-miagola%2F&psig=AOvVaw1DZu-UzBU1zz8HGL4PvKg5&ust=1718286532302000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj506Sa1oYDFQAAAAAdAAAAABAE']
}


const POST = async () => {
    try{

    const res = await fetch (BASE_URL, newItems, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body:JSON.stringify(newItems)
    })
    const data = await res.json();
    console.log('Dato aggiunto', data.id)

console.log(await POST(data.it));


const productID = res.id;
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

buttonSendEl.addEventListener('click', event => {
    inputTitleEl.ariaValueMax;
    event.preventDefault();

    const product = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        category: inputCategoryEl.value,
        images: inputImagesEl.value
    }

    POST(product)
})


const deleteID = async (id) => {
const url = `${BASE_URL}/${id}`;
        const response = await fetch(BASE_URL, {
            method: 'DELETE'
        });

        console.log('Oggetto cancellato');
        return response.json();

}


deleteID()
