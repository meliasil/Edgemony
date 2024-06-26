import { API_KEY } from "./keys";


const options = {
    Authorization: `Bearer ${API_KEY}`,
    accept: application/json
}


fetch('https://api.themoviedb.org/3/movie/popular', options) 
.then(res => res.json())
.then(data => {
    const movies = data.results;
    displayMovies(movies);
})


.catch(error => console.error('Errore nel recupero dei dati', error));


function displayMovies(movies) {
    const container = document.querySelector('.movies-container');


    movies.forEach(movies => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        const titleEl = document.createElement('h2');
        titleEl.className = 'movie-title';
        const image = document.createElement('img');
        image.className = 'card-img';
        image.src = movies.image;
        const description = document.createElement('p');
        description.className = 'movie-p'

        card.innerHTML = (titleEl, image, p);

        container.appendChild(card);
    })
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movies => movies.titleEl.toLowerCase().includes(searchText));
    displayMovies(filteredMovies);
})