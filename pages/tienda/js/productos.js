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
    colocandoTarjetasTiendaConJSON()
}

btnOrdenarPrecio.onclick = ordenarPorPrecio
//-------------Ordenar por Precio Inverso-------------
const ordenarPorPrecioInverso = () => {
    productos.reverse().precio
    colocandoTarjetasTiendaConJSON()
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
    colocandoTarjetasTiendaConJSON()
}

btnOrdenarProductos.onclick = ordenarPorProducto
//-------------Ordenar por nombre Inverso-------------
const ordenarPorProductoInverso = () => {
    productos.reverse().nombre
    colocandoTarjetasTiendaConJSON()
}

btnOrdenarProductosInverso.addEventListener("dblclick",ordenarPorProductoInverso)

