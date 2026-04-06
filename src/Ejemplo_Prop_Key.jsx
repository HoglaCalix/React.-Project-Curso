function ListaProductos(){
    const Productos = [
        {id:1, nombre: "Laptop" },
        {id:2, nombre: "Mouse" },
        {id:3, nombre: "Monitor" }
    ];

    return (
        <ul>
            {Productos.map((producto) =>
            (
                <li key={producto.id}>
                    {producto.nombre}
                </li>
            ))}
        </ul>
    )
}

export default ListaProductos;