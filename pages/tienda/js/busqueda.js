//const btnBuscarProducto = document.querySelector("button#buscarProducto")
const inputBuscarProducto = document.querySelector("input#buscarProducto")

//-------------Buscar por nombre-------------
/*
function filtrarCancion() {
    let buscar = prompt("Que canción quieres escuchar hoy?")
    let resultado = productos.filter(elemento => elemento.producto.includes(buscar))
    if (productos.some(elemento => elemento.producto.includes(buscar))) {
        
    } else {
        console.warn("No se encontro esa cancion")
    }
}
*/
//btnBuscarProducto.onclick = filtrarProductos
//-------------Buscar cuando aprete enter-------------
inputBuscarProducto.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        console.log("aca iria mi funcion de buscar")
    }
})