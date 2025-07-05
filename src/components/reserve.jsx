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

  const nameIsValid = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,}$/.test(updatedData.name)
  const dateIsValid = updatedData.date !== ''
  const timeIsValid = updatedData.time !== ''
  const guestsIsValid = parseInt(updatedData.guests) > 0

  if (nameIsValid && dateIsValid && timeIsValid && guestsIsValid) {
    setMessage('')
    setBtnDisabled(false)
  } else {
    setMessage('Verifica los campos: nombre válido, fecha y hora seleccionadas, y número de comensales mayor a 0.')
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
  <>
    <h1>Formulario de Reserva</h1>
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
  </>
  )
}

export default Reserve
