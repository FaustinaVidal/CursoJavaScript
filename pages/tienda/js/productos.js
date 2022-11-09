const btnOrdenarPrecio = document.querySelector("button#ordenarProductosPrecio")
const btnOrdenarProductos = document.querySelector("button#ordenarProductosNombre")
const btnBuscarProducto = document.querySelector("button#buscarProducto")

//-------------Ordenar por Precio-------------
function ordenarPorPrecio() {
    productos.sort((elementa, elementb) => {
        if (elementa.precio > elementb.precio) {
            return 1
        }
        if (elementa.precio < elementb.precio) {
            return -1
        }
        return 0
    })
    colocandoTarjetasTienda()
}

btnOrdenarPrecio.onclick = ordenarPorPrecio

//-------------Ordenar por nombre-------------
function ordenarPorProducto() {
    productos.sort((elementa, elementb) => {
        if (elementa.nombre > elementb.nombre) {
            return 1
        }
        if (elementa.nombre < elementb.nombre) {
            return -1
        }
        return 0
    })
    colocandoTarjetasTienda()
}

btnOrdenarProductos.onclick = ordenarPorProducto

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
