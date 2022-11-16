const btnOrdenarCanciones = document.querySelector("button#ordenarCancionesNombre")

const btnOrdenarCancionesInverso = document.querySelector("button#ordenarCancionesNombre")
//-------------Ordenar por nombre-------------
const ordenarPorCancion = () => {
    canciones.sort((elementa, elementb) => {
        if (elementa.cancion > elementb.cancion) {
            return 1
        }
        if (elementa.cancion < elementb.cancion) {
            return -1
        }
        return 0
    })
    colocandoTarjetasMusicaConJSON()
}

btnOrdenarCanciones.onclick = ordenarPorCancion
//-------------Ordenar por nombre inverso-------------
const ordenarPorCancionInverso = () => {
    canciones.reverse().cancion
    colocandoTarjetasMusicaConJSON()
}

btnOrdenarCancionesInverso.addEventListener("dblclick",ordenarPorCancionInverso)
