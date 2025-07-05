import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  date: '',
  time: '',
  guests: ''
}

const Reserve = () => {
  const [data, setData] = useState(initialState)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const updatedData = { ...data, [name]: value }
    setData(updatedData)

    // Validación simple: todos los campos obligatorios
    if (
      updatedData.name.length >= 3 &&
      updatedData.date !== '' &&
      updatedData.time !== '' &&
      updatedData.guests !== ''
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

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('reserve', JSON.stringify(data))
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
        placeholder="Nombre de la reserva"
        value={data.name}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={data.date}
        onChange={handleInputChange}
      />
      <input
        type="time"
        name="time"
        value={data.time}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="guests"
        placeholder="Número de comensales"
        value={data.guests}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={btnDisabled}>Reservar</button>
      <p>{message}</p>
    </form>
  )
}

export default Reserve
