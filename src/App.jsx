import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Saludo(){
  return <h1>Hola Mundo.</h1>
  
}

function Producto(props){
  return(
    <div>
      <h2>{props.nombre}</h2>
      <p>Precio: ${props.precio}</p>
    </div>
  )
}


function App() {
  return(
    <div>
      <Saludo/>
    </div>
    
 //Segundo ejemplo de Props
 //<Producto nombre="Laptop" precio="1200"/>
  )

  
}


export default App
