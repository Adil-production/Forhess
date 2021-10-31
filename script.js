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
        <ion-card>
        <img src="${IMG_PATH + poster_path}" />
        <ion-card-header>
          <ion-card-title>${title}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          ${overview}
        </ion-card-content>
       
            <ion-label style="margin : 10px; padding:10px;">${release_date}</ion-label><ion-label style="position : absolute; right : 5px;"><ion-icon name="star" style="margin-right : 10px; transform: translateX(-30%) translateY(10%); font-size:15px; color : #E49B0F;"></ion-icon>${vote_average}</ion-label>
            <br>
            <br>

      </ion-card>
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
document.getElementById("back").addEventListener("click",function(){
    window.location.reload();
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById("back").style.display = "block";
    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {

        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})


