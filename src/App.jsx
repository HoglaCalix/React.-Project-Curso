import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ListaEstudiantes from './Mapeo_Arrays.jsx'
import ListaProductos from './Ejemplo_Prop_Key.jsx'
import Formulario from './Ejemplo_Use_State.jsx'

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
      <Formulario></Formulario>
    </div>
  )

  
}


export default App
