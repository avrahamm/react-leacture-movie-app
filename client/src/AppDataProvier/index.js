const url = 'http://localhost:8080/api'

const serializeMovie = movie => {
  return {
    id: movie._id,
    title: movie.name,
    image: movie.image,
    year: movie.created
  }
}
export const getMovies = () => {
  return fetch(`${url}/movies`)
    .then(response => response.json())
    .then(response =>
      response.map(movie => {
        return {
          id: movie._id,
          title: movie.name,
          image: movie.image,
          year: movie.created
        }
      })
    )
    .catch(console.log)
}

export const removeMovieById = movieId => {
  return fetch(`${url}/movies/${movieId}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(response => response.map(serializeMovie))
    .catch(console.log)
}

export const addNewMovie = movie => {
  return fetch(`${url}/movies/`, {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: { 'content-type': 'application/json' }
  })
    .then(response => response.json())
    .then(serializeMovie)
    .catch(console.log)
}
