function ListaEstudiantes(){
    const Estudiantes = ["Ana", "Luis", "Carlos"]

    return(
        <ul>
            {Estudiantes.map ((estudiante) => (
            <li>{estudiante}</li>))}
        </ul>
    )
}

export default ListaEstudiantes;