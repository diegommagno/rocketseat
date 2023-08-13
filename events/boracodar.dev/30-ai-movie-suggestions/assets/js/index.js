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


getMovies()
/*
  Extract movie details
  https://api.themoviedb.org/3/movie/{movie_id} 
*/

async function getMoreInfo(id) {

}