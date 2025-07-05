import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  age: '',
  address: ''
}

const Contact = () => {
  const [data, setData] = useState(initialState)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleInputChange = (event) => {
  const { name, value } = event.target

  const updatedData = {
    ...data,
    [name]: value
  }

  setData(updatedData)

  const nameIsValid = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,}$/.test(updatedData.name)
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedData.email)
  const ageIsValid = parseInt(updatedData.age) > 0
  const addressIsValid = updatedData.address.length >= 5

  if (nameIsValid && emailIsValid && ageIsValid && addressIsValid) {
    setMessage('')
    setBtnDisabled(false)
  } else {
    setMessage('Verifica los campos: nombre válido, email correcto, edad mayor a 0 y dirección no vacía.')
    setBtnDisabled(true)
  }
}

  const clearState = () => {
    setData({ ...initialState })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('contact', JSON.stringify(data))
    clearState()

    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={data.age}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={data.address}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={btnDisabled}>Submit</button>
      <p>{message}</p>
    </form>
  )
}

export default Contact



