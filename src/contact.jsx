import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '' })
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const updatedData = { ...data, [name]: value }

    if (name === 'name' && value.length < 3) {
      setMessage('El nombre debe tener al menos 3 caracteres')
      setBtnDisabled(true)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }

    setData(updatedData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('contact', JSON.stringify(data))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={data.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={data.email}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={btnDisabled}>Enviar</button>
      <p>{message}</p>
    </form>
  )
}

export default Contact

