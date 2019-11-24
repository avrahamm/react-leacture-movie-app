import React, { useState, useEffect } from 'react'
import { getMovies } from '../../AppDataProvier'
import { MovieItem } from '../MovieItem'
import './styles.scss'
export const MoviesGallery = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then(movies => setMovies(movies))
  }, [])

  return (
    <div className="app-movies-gallery">
      {movies.map(movie => {
        return (
          <div key={movie.id} className="app-movies-gallery__item">
            <MovieItem image={movie.image} year={movie.year} title={movie.title} />
          </div>
        )
      })}
    </div>
  )
}
