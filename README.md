# 🧩 Ejercicio React - Página Personal y Restaurante

Este proyecto fue realizado como parte del Bootcamp de Desarrollo Web Full Stack. Se trata de una página web construida con React que incluye un formulario de contacto y una página de reservas para un restaurante.

---

## 📌 Funcionalidades

✅ Navegación entre vistas usando React Router  
✅ Formulario de contacto con validaciones completas  
✅ Formulario de reservas con validaciones completas  
✅ Almacenamiento de datos en `localStorage`  
✅ Redirección automática al enviar formularios  
✅ Estilo visual moderno y limpio con CSS personalizado  
✅ Código modular y organizado en carpeta `components/`

---

## 🧪 Formularios implementados

### 📇 Contacto

Campos:

- Nombre (mínimo 3 letras, solo letras)
- Email (formato válido)
- Edad (mayor que 0)
- Dirección (mínimo 5 caracteres)

✔ Guarda los datos en `localStorage`  
✔ Redirige a la página principal (`/`)

### 🍽️ Reserva

Campos:

- Nombre (mínimo 3 letras, solo letras)
- Fecha (obligatoria)
- Hora (obligatoria)
- Número de comensales (mayor que 0)

✔ Guarda los datos en `localStorage`  
✔ Redirige a la página principal (`/`)

---

## 🎨 Diseño

El diseño incluye:

- Formularios centrados con sombra y bordes redondeados
- Inputs estilizados con enfoque (`focus`)
- Botones con hover y estado deshabilitado
- Mensajes de validación visibles y destacados

Todo el estilo está en el archivo `src/App.css`

---

## 🚀 Tecnologías utilizadas

- React (con Vite)
- JavaScript
- React Router DOM
- HTML y CSS

---

## 📂 Estructura del proyecto

src/
│
├── components/
│ ├── Contact.jsx
│ ├── Reserve.jsx
│ ├── Home.jsx
│ ├── About.jsx
│ └── Navbar.jsx
│
├─app.css
│
│
├── App.jsx
└── main.jsx

✨ Autor
Elida Rodríguez
Estudiante de Desarrollo Web
