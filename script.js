const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
    console.log(data)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview , release_date } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <div class="card" style="width: 18rem; box-shadow:0px 0px 30px -5px rgb(26,26,26); border : none; border-radius : 20px; background-color:#319f5f; padding : 10px; ">
        <img src="${IMG_PATH + poster_path}" style="border-radius:20px;" class="card-img-top " alt="${title}">
        <div class="card-body">
        <h2 class="text-white">${title}</h2>
        <br>
      
      
       <span class="text-white" name="overview"> ${overview}</span>
        </div>
        
        <div align="right" >
        <div style="transform : translateY(130%);">
        <svg style="transform : translateY(-10%); fill:#c67100;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <g>
            <polygon points="256,372.686 380.83,448 347.809,305.934 458,210.409 312.733,197.934 256,64 199.257,197.934 54,210.409    164.192,305.934 131.161,448  "/>
        </g>
        </svg><span  class="m-2 text-white">${vote_average}</span></div>
        <div align="left" style="float:left;" class="m-2">
        <span class="text-white">${release_date}</span>
        </div>
        </div>
      </div>
      <br>
            
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("home").classList.remove("navbItem");
    document.getElementById("home2").classList.add("navbItem");

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        document.getElementById("title").style.display = "none";
        main.style.display = "block";
        document.getElementById("up").style.display = "block";
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

document.getElementById("home").addEventListener("click" , function(){

    document.getElementById("home").classList.add("navbItem");
    document.getElementById("home2").classList.remove("navbItem");
    window.location.reload();

})

document.getElementById("home2").addEventListener("click" , function(){

    document.getElementById("home").classList.remove("navbItem");
    document.getElementById("home2").classList.add("navbItem");
    document.getElementById("title").style.display = "none";
    document.getElementById("up").style.display = "none";
    form.style.display = "block";
    main.style.display = "none";

})
