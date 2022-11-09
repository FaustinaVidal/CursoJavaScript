const btnOrdenarMeGustas = document.querySelector("button#ordenarCancionesMg")

const btnOrdenarMeGustasInverso = document.querySelector("button#ordenarCancionesMg")

const btnOrdenarCanciones = document.querySelector("button#ordenarCancionesNombre")

const btnOrdenarCancionesInverso = document.querySelector("button#ordenarCancionesNombre")

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
//-------------Ordenar por me gustas inverso-------------
function ordenarPormeGustaInverso() {
    canciones.reverse().meGusta
    colocandoTarjetasMusica()
}

btnOrdenarMeGustasInverso.addEventListener("dblclick",ordenarPormeGustaInverso)
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
//-------------Ordenar por nombre inverso-------------
function ordenarPorCancionInverso() {
    canciones.reverse().cancion
    colocandoTarjetasMusica()
}

btnOrdenarCancionesInverso.addEventListener("dblclick",ordenarPorCancionInverso)
