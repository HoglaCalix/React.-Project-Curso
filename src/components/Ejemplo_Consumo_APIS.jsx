import { useState, useEffect } from "react";

function Usuario(){

        const [usuarios, setUsuarios] = useState([]);

        useEffect(() =>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => respuesta.json())
            .then((datos) => setUsuarios(datos));
        }, []
        )

        return(

            <div>
                <h2>Lista de Usuarios</h2>
                    <ul>
                        {usuarios.map((usuario) => (
                        <li key={usuario.id}>{usuario.name}</li>))}
                    </ul>
            </div>
        )
}

export default Usuario;