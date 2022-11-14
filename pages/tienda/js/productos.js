const btnOrdenarPrecio = document.querySelector("button#ordenarProductosPrecio")
const btnOrdenarPrecioInverso = document.querySelector("button#ordenarProductosPrecio")
const btnOrdenarProductos = document.querySelector("button#ordenarProductosNombre")
const btnOrdenarProductosInverso = document.querySelector("button#ordenarProductosNombre")

//-------------Ordenar por Precio-------------
const ordenarPorPrecio = () => {
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
//-------------Ordenar por Precio Inverso-------------
const ordenarPorPrecioInverso = () => {
    productos.reverse().precio
    colocandoTarjetasTienda()
}

btnOrdenarPrecioInverso.addEventListener("dblclick", ordenarPorPrecioInverso)
//-------------Ordenar por nombre-------------
const ordenarPorProducto = () => {
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
//-------------Ordenar por nombre Inverso-------------
const ordenarPorProductoInverso = () => {
    productos.reverse().nombre
    colocandoTarjetasTienda()
}

btnOrdenarProductosInverso.addEventListener("dblclick",ordenarPorProductoInverso)

