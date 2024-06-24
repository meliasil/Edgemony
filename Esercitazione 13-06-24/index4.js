import {GET, /* POST */ PUT, DELETE} from './api-calls.js';

const inputTitleEl= document.querySelector('.title');
const inputPriceEl= document.querySelector('.price');
const inputDescriptionEl= document.querySelector('.description');
const inputCategoryEl= document.querySelector('.category-id');
const inputImagesEl= document.querySelector('.images');
const buttonSendEl= document.querySelector('.button-send');
const titleErrorMessage = document.querySelector('.title-error');
const priceErrorMessage = document.querySelector('.price-error');
const descriptionErrorMessage = document.querySelector('.description-error');
const categoryErrorMessage = document.querySelector('.category-id-error');
const imagesErrorMessage = document.querySelector('.images-error');

const container = document.querySelector('.container');



/* const results = await GET(916);

console.log('GET prima della modifica', results);

const newProduct = {
    title: 'PippoPhone',
    price: 899,
    description: 'Best Phone',
    categoryId: 2,
    images: ['https://pippo.asd']
}

const updateProduct = {
    title: 'PlutoPhone',
    price: 39,
    description: 'Nonsi',
    categoryId: 6,
    images: ['https://pluto.asd']
}

const putResult = await PUT(916, updateProduct);
console.log('Aggiornato con PUT', putResult);
 */
/* const postResult = await POST(newProduct);

console.log(postResult) */



console.log('GET prima del Delete', await GET(916));

console.log('Risposta del DELETE', await DELETE(916));



console.log('GET dopo il DELETE', await GET(916));


