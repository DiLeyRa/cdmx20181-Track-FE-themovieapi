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
            content.innerHTML = '';
            for (i = 0; i < (data.Search).length; i++) {
                content.innerHTML += `
            <div class="cajamovies col-md-3 mt-2">
            <div class="card">
            <img class="card-img-top" src="${data.Search[i].Poster}">
            <div class="card-body">
            <h5 class="card-title">${data.Search[i].Title}</h5>
            <p class="card-text">${data.Search[i].Type}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${data.Search[i].imdbID
            }"> + Detalles</button>

            <!-- Modal -->
<div class="modal fade" id="${data.Search[i].imdbID
}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${data.Search[i].Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src="${data.Search[i].Poster}" alt="" width="100" height="100">
        <p></p>
        <p>Tipo: ${data.Search[i].Type}</p>
        <p>Año: ${data.Search[i].Year}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
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

