import React, { useState, useEffect, useCallback } from 'react'
import { getMovies, removeMovieById, addNewMovie } from '../../AppDataProvier'
import { AddMovieForm } from '../../components/AddMovieForm'
import './styles.scss'

export const MoviesTable = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then(movies => setMovies(movies))
  }, [])

  const handleRemove = useCallback(
    movieId => {
      removeMovieById(movieId).then(() => {
        setMovies(movies.filter(movie => movie.id !== movieId))
      })
    },
    [movies]
  )

  const handleAddMovie = useCallback(
    newMovie => {
      addNewMovie(newMovie).then(movie => {
        setMovies(movies.concat(movie))
      })
    },
    [movies]
  )

  return (
    <div className="app-movies-table">
      <AddMovieForm
        onAdd={newMovie => {
          handleAddMovie(newMovie)
        }}
      />
      Movies List
      {movies.map(movie => {
        return (
          <div key={movie.id} className="app-movies-table__item">
            {movie.title}

            <div
              className="app-movies-table__remove-btn"
              onClick={() => handleRemove(movie.id)}
            >
              x
            </div>
          </div>
        )
      })}
    </div>
  )
}
