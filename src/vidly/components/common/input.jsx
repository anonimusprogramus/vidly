import React from 'react'

const Input = ({ name, value, label, error, onChange, autoFocus }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        autoFocus={autoFocus}
        type='text'
        className='form-control'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Input
