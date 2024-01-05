import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.tsx'
import './main.css'
import PanelPublicacion from './components/Panel_Crear_Publicacion/PanelPublicacion.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <PanelPublicacion/>
  </React.StrictMode>,
)
