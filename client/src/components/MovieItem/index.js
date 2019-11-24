import React from 'react'
import './styles.scss'

export const MovieItem = ({ title, image, year }) => (
  <div className="app-movie-item">
    <img src={image} alt={title} />
    <div className="app-movie-item__info">
      <h1>{title}</h1>
      <span>created: {year}</span>
    </div>
  </div>
)
