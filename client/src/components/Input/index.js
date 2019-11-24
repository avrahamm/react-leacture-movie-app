import React from 'react'

export const Input = ({ type = 'text', value, onChange, placeholder }) => {
  const handleChangeValue = e => {
    onChange(e.target.value)
  }

  return (
    <input
      type={type}
      onChange={handleChangeValue}
      value={value}
      placeholder={placeholder}
    />
  )
}
