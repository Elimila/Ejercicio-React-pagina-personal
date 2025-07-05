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

    // Validación simple
    if (
      updatedData.name.length >= 3 &&
      updatedData.email !== '' &&
      updatedData.age !== '' &&
      !isNaN(updatedData.age) &&
      updatedData.address !== ''
    ) {
      setMessage('')
      setBtnDisabled(false)
    } else {
      setMessage('Todos los campos son obligatorios y el nombre debe tener al menos 3 caracteres')
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



