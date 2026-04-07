import { useState } from "react";

function Formulario(){
    const [nombre, setNombre] = useState(" ");
    const [correo, setCorreo] = useState(" ");
    
    const manejarEnvio = (e) => {
        e.preventDefault();
        alert("Nombre enviado" + nombre);
    }

    return(
    <form onSubmit={manejarEnvio}>
        <div>
            <input type="text" value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>

            <p>Hola {nombre}</p>
        
            <input type="text" value={correo}
            onChange={(e) => setCorreo(e.target.value)}/>

            <p>Correo: {correo}</p>
        </div>
        <button type="submit">Enviar</button>
    </form>
    );

}

export default Formulario;