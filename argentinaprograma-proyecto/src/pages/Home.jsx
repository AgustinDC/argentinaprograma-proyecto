import React from 'react'
import CreadorDeTareas from '../components/CreadorDeTareas'
import ListadoDeTareas from '../components/ListadoDeTareas'
import TareasRealizadas from '../components/TareasRealizadas'

function Home() {
  return (
    <div>
        <h1>Control de Tareas</h1>
        <CreadorDeTareas/>
        <ListadoDeTareas/>
        <TareasRealizadas/>
    </div>
  )
}

export default Home