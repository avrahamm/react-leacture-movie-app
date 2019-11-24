import React, { useState } from 'react'
import { Input } from '../Input'
import './styles.scss'

export const AddMovieForm = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [created, setCreated] = useState('')
  const [desc, setDesc] = useState('')
  const [director, setDirector] = useState('')
  const [image, setImage] = useState('')
  const [rating, setRating] = useState('')

  return (
    <div className="app-add-movie-form">
      <Input value={name} placeholder="name" onChange={setName} />
      <Input value={desc} placeholder="description" onChange={setDesc} />
      <Input value={created} placeholder="created" onChange={setCreated} />
      <Input value={director} placeholder="director" onChange={setDirector} />
      <Input value={image} placeholder="image" onChange={setImage} />
      <Input
        type="number"
        value={rating}
        placeholder="rating"
        onChange={setRating}
      />
      <div className="app-add-movie-form__btns">
        <button
          className="app-add-movie-form__btn"
          onClick={() => {
            onAdd({
              name,
              description: desc,
              image,
              rating,
              director,
              created
            })
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}
