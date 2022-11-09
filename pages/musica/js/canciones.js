const btnOrdenarMeGustas = document.querySelector("button#ordenarCancionesMg")
const btnOrdenarCanciones = document.querySelector("button#ordenarCancionesNombre")

//-------------Ordenar por me gustas-------------
function ordenarPormeGusta() {
    canciones.sort((elementa, elementb) => {
        if (elementa.meGusta > elementb.meGusta) {
            return 1
        }
        if (elementa.meGusta < elementb.meGusta) {
            return -1
        }
        return 0
    })
    colocandoTarjetasMusica()
}

btnOrdenarMeGustas.onclick = ordenarPormeGusta

//-------------Ordenar por nombre-------------
function ordenarPorCancion() {
    canciones.sort((elementa, elementb) => {
        if (elementa.cancion > elementb.cancion) {
            return 1
        }
        if (elementa.cancion < elementb.cancion) {
            return -1
        }
        return 0
    })
    colocandoTarjetasMusica()
}

btnOrdenarCanciones.onclick = ordenarPorCancion

