/*
Getting popular movies list
https://developer.themoviedb.org/reference/movie-popular-list
*/

async function getMovies() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk0YWU2ZGVkMDQyMTM1OWY1ZDc0ZTgwMzYxMGI1MyIsInN1YiI6IjY0ZDA1NWZjMzAzYzg1MDBjNjE0MzI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5SuPaaFr9zSzEhhQnGljMCYYV1G1dgE6QwW0YEdV_E'
        }
    };
    
    try {
        return fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then(response => response.json())
    } catch (error) {
        console.log(error)
    }
}

/*
  Extract movie details
  https://api.themoviedb.org/3/movie/{movie_id} 
*/

async function getMoreInfo(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk0YWU2ZGVkMDQyMTM1OWY1ZDc0ZTgwMzYxMGI1MyIsInN1YiI6IjY0ZDA1NWZjMzAzYzg1MDBjNjE0MzI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5SuPaaFr9zSzEhhQnGljMCYYV1G1dgE6QwW0YEdV_E'
    }
  };
  
  try {
    return fetch('https://api.themoviedb.org/3/movie/' + id, options)
    .then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

/* 
   Watch button function to play movie trailer
   https://api.themoviedb.org/3/movie/{movie_id}/videos 
*/

async function watch(e) {
  const movie_id = e.currentTarget.dataset.id
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk0YWU2ZGVkMDQyMTM1OWY1ZDc0ZTgwMzYxMGI1MyIsInN1YiI6IjY0ZDA1NWZjMzAzYzg1MDBjNjE0MzI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5SuPaaFr9zSzEhhQnGljMCYYV1G1dgE6QwW0YEdV_E'
    }
  };
  
  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
    .then(response => response.json())

    const { results } = data

    const youtubeVideo = results.find(video => video.type === 'Trailer')

    window.open(`https://www.youtube.com/watch?v=${youtubeVideo.key}`, '_blank')

  } catch (error) {
    console.log(error)
  }
}

/*
  Insert the HTML for the movie cards
*/

function createMovieCard({id, title, rating, poster, time, year}) {
  return `
    <div class="movie">
          <div class="title">
          <span>${title}</span>
          
          <div>
              <img src="./assets/icons/star.svg" alt="">
              <p>${rating}</p>
          </div>
          </div>

          <div class="poster">
              <img src="https://image.tmdb.org/t/p/w500${poster}" alt="${title} Poster">
          </div>

          <div class="info">
          <div class="duration">
              <img src="./assets/icons/clock.svg" alt="">
          
              <span>${time}</span>
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

/* Function to select 3 random videos */

function selectThreeVideos(results) {
  const random = () => Math.floor(Math.random() * results.length)

  let selectedVideos = new Set() 

  while(selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id)
  }

  return [...selectedVideos]
}

/* Function to transform runtime from API */

function minutesToHoursMinutesAndSeconds(minutes) {
  const date = new Date(null)
  date.setMinutes(minutes)
  return date.toISOString().slice(11, 19)
}

/* Start function that gives a new recommendation when someone clicks it's button */

async function start() {
  const { results } = await getMovies()

  const bestOfThree = selectThreeVideos(results)
  .map(async movie => {
    const info = await getMoreInfo(movie)

    const props = {
      id: info.id,
      title: info.title,
      rating: Number(info.vote_average).toFixed(1),
      poster: info.poster_path,
      time: minutesToHoursMinutesAndSeconds(info.runtime),
      year: info.release_date.slice(0, 4)
    }

    return createMovieCard(props)
  })

  const output = await Promise.all(bestOfThree)
  
  document.querySelector('.movies').innerHTML = output.join("")
}

start()