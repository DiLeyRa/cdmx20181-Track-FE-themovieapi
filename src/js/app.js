let content = document.getElementById('contenido');
let btnAvengers = document.getElementById('btnAvengers');
let btnHarry = document.getElementById('btnHarry');
let btnExtras = document.getElementById('btnExtras');


const getMovies = (search) => {
    const url = 'http://www.omdbapi.com/?apikey=ae26bf8e&s=' + search;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.Search);
            for (i = 0; i < (data.Search).length; i++) {
                content.innerHTML += `
            <div class="cajamovies col-md-3 mt-2">
            <div class="card">
            <img class="card-img-top" src="${data.Search[i].Poster}">
            <div class="card-body">
            <h5 class="card-title">${data.Search[i].Title}</h5>
            <p class="card-text">${data.Search[i].Type}</p>
            <a href="#modal1" class="btn btn-primary modales" modal-trigger">Ver detalles</a>
            </div>
            </div>
            </div>`
            }
        })
        .catch(err => console.log('Error', err.message));
}

btnAvengers.addEventListener('click', event => {
    getMovies('avengers');
});

btnHarry.addEventListener('click', event => {
    getMovies('harry_potter');
});

btnExtras.addEventListener('click', event => {
    getMovies('que');
});

