/*
https://developer.themoviedb.org/reference/movie-popular-list
*/

/* Clicar em Popular, troca para JavaScript e clica para gerar, coloca aqui e cria um try catch com o fetch */
async function getTvSeries() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk0YWU2ZGVkMDQyMTM1OWY1ZDc0ZTgwMzYxMGI1MyIsInN1YiI6IjY0ZDA1NWZjMzAzYzg1MDBjNjE0MzI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5SuPaaFr9zSzEhhQnGljMCYYV1G1dgE6QwW0YEdV_E'
    }
  };
  
  try {
    return fetch('https://api.themoviedb.org/3/tv/popular', options)
    .then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

/*
  Extract movie details
  https://api.themoviedb.org/3/movie/{movie_id} 

  Todas as vezes que estamos falando de sair da aplicação e buscar dados em algum lugar, esse algum sendo uma API ou DB, saindo da minha aplicação e buscando algo em algum lugar,
  preciso esperar isso acontecer. Se preciso esperar, estou falando de algo assíncrono, que demora um pouco para podermos usar. 
*/
async function getMoreInfo(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk0YWU2ZGVkMDQyMTM1OWY1ZDc0ZTgwMzYxMGI1MyIsInN1YiI6IjY0ZDA1NWZjMzAzYzg1MDBjNjE0MzI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5SuPaaFr9zSzEhhQnGljMCYYV1G1dgE6QwW0YEdV_E'
    }
  };

  /* Tente pegar esses dados da API */
  try {
    return fetch('https://api.themoviedb.org/3/tv/' + id, options)
    .then(response => response.json())

  } catch (error) {
    console.log(error)
  }
}

/* 
   Watch button function to play movie trailer
   https://api.themoviedb.org/3/movie/{movie_id}/videos 
*/

function createTvSeriesLayout({id, name, rating, poster, year}) {
    return `
    <div class="movie">
        <div class="name">
        <span>${name}</span>
        
        <div>
            <img src="./assets/icons/star.svg" alt="">
            <p>${rating}</p>
        </div>
        </div>

        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500${poster}" alt="${name} Poster">
        </div>

        <div class="info">
        <div class="duration">
            <img src="./assets/icons/clock.svg" alt="">
        
            <span>Seasons</span>
        </div>

        <div class="year">
            <img src="./assets/icons/calendar-blank.svg" alt="">
        
            <span>${year}</span>
        </div>
        </div>

        <button onclick="watch(event)" data-id="${id}">
          <img src="./assets/icons/play.svg" alt="">
          
          <span>Assistir trailer</span>
        </button>
    </div>
    `
}

/*
  function select3Videos
  Vou ter que rodar o createMovieLayout três vezes, uma para cada filme.
*/

function selectThreeVideos(results) {
  const random = () => Math.floor(Math.random() * results.length)

  let selectedVideos = new Set() // Set é um array que não aceita valores repetidos, por exemplo, se fizer um .add nele e colocar 12 e depois .add de novo e colocar 12, vai ter somente um 12 e não dois.

  while(selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id) // Results são todas as informações do filme, por isso pega o id.
    /* Desestruturado para que retorne um array com 3 ids */
    /* Enquanto o tamanho do selectedVideos for menor que 3, vai adicionar um número aleatório no selectedVideos */
  } 
  return [...selectedVideos]
}

function minutesToHoursMinutesAndSeconds(minutes) {
  const date = new Date(null)
  date.setMinutes(minutes)
  return date.toISOString().slice(11, 19)
  /* .slice(11 caracteres e 19 caracteres para sobrar somente o que queremos) */

  /*
    Copilot Solution
    const hours = Math.floor(minutes / 60)
    const minutesLeft = minutes % 60
    return `${hours}:${minutesLeft}:00`
  */
}

async function start() {

  /* Pegar as sugestões de filmes populares da API */
  const { results } = await getTvSeries()

  /* Pegar randomicamente 3 filmes para sugestão */
  const bestOfThree = selectThreeVideos(results)
  .map(async movie => {
    /* Pegar informações extras dos três filmes */
    /* Aqui já temos o id do filme que foi obtivo pela selectThreeVideos */
    /* O selectThreeVideos vai retornar um array e estou passando um map, então ele vai fazer um novo array nesse bestOfThree. Precisa retornar algo, vou retornar o uso do createMovieLayout*/
    const info = await getMoreInfo(movie)

  /* Organizar os dados para... (o de baixo, substituir o conteúdo dos movies no HTML) - organizar os dados que preciso de todos os dados que vem */
    const props = {
      id: info.id,
      name: info.name,
      rating: Number(info.vote_average).toFixed(1),
      poster: info.poster_path,
      time: minutesToHoursMinutesAndSeconds(info.runtime),
      year: info.first_air_date.split('-')[0] /* Ou .slice(0, 4), tirando os 4 últimos caracteres */
    }

    return createTvSeriesLayout(props)
    /* Retorno o uso do createMovieLayout passando as props que quero para ele */
    /* Isso deve retornar um objeto com todas as informações e usa as informações em cada lugar do HTML */
  })

  const output = await Promise.all(bestOfThree)

  /* Substitiuir o conteúdo dos movies no HTML */
  document.querySelector('.movies').innerHTML = output.join("")
}

start()