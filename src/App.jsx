import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Despedida(){
  return <h1>Adios Mundo.</h1>
  
}
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

//Uso de UseState
function Contador(){
  const [contador, setContador] = useState(0);

  return(
    <div>
      <p>Contador :{contador}</p>
      <button onClick={() => setContador(contador +1)}> Aumentar</button>
    </div>
  )
}

//Uso de useState y Eventos

function NombreUsuario(){
  const [nombre,setNombre] = useState("");
  return(
  <div><input type="text" 
  placeholder='Ingrese su Nombre' 
  onChange={(e) =>setNombre(e.target.value)}/>
  
  <h2>Hola {nombre} </h2>
  </div>
  )
}



function App() {
  return(
    <div>
      <Contador></Contador>
    </div>
  )

  
}


export default App
