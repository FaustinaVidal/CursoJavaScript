const btnOrdenarMeGustas = document.querySelector("button#ordenarCancionesMg")

const btnOrdenarMeGustasInverso = document.querySelector("button#ordenarCancionesMg")

const btnOrdenarCanciones = document.querySelector("button#ordenarCancionesNombre")

const btnOrdenarCancionesInverso = document.querySelector("button#ordenarCancionesNombre")

//-------------Ordenar por me gustas-------------
const ordenarPormeGusta = () => {
    canciones.sort((elementa, elementb) => {
        if (elementa.meGusta > elementb.meGusta) {
            return 1
        }
        if (elementa.meGusta < elementb.meGusta) {
            return -1
        }
        return 0
    })
    colocandoTarjetasMusicaConJSON()
}

btnOrdenarMeGustas.onclick = ordenarPormeGusta
//-------------Ordenar por me gustas inverso-------------
const ordenarPormeGustaInverso = () => {
    canciones.reverse().meGusta
    colocandoTarjetasMusicaConJSON()
}

btnOrdenarMeGustasInverso.addEventListener("dblclick",ordenarPormeGustaInverso)
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
