const listarCanciones = () => {
    console.table(canciones)
}

const agregarCancion = () => {
    let genero = prompt("Ingrese el genero de la canción que desea agregar:").trim()
    let artista = prompt("Ingrese el nombre del artista de la canción que desea agregar:").trim()
    let cancion = prompt("Ingrese el nombre de la canción que desea agregar:").trim()
    let meGusta = 0
    let video = prompt("Ingrese el codigo del video de la canción que desea agregar:").trim()

    if ((artista.length > 0) && (cancion.length > 0) && (video.length > 0)) {
        canciones.push(new Contenido(genero, artista, cancion, meGusta))
        cardsCanciones()
    } else {
        console.warn("Por favor, agrega una canción")
        agregarCancion()
    }
}

//--
function filtrarArtista() {
    let buscar = prompt("Que Artista quieres escuchar hoy?")
    let resultado = canciones.filter(elemento => elemento.artista.includes(buscar))
    if (resultado == []) {
        console.warn("No se encontro ese Artista")
    } else {
        console.table(resultado)
    }
}

function filtrarCancion() {
    let buscar = prompt("Que canción quieres escuchar hoy?")
    let resultado = canciones.filter(elemento => elemento.cancion.includes(buscar))
    if (resultado == []) {
        console.warn("No se encontro esa cancion")
    } else {
        console.table(resultado)
    }
}

//--
function ordenarPorArtista() {
    canciones.sort((a, b) => {
        if (a.artista > b.artista) {
            return 1
        }
        if (a.artista < b.artista) {
            return -1
        }
        return 0
    })
    cardsCanciones()
}

function ordenarPorCancion() {
    canciones.sort((a, b) => {
        if (a.cancion > b.cancion) {
            return 1
        }
        if (a.cancion < b.cancion) {
            return -1
        }
        return 0
    })
    cardsCanciones()
}

function ordenarPormeGusta() {
    let meGustaOrdenados = canciones.sort((a, b) => {
        if (a.meGusta > b.meGusta) {
            return 1
        }
        if (a.meGusta < b.meGusta) {
            return -1
        }
        return 0
    })
    cardsCanciones()
}

//---
function felicitacionPormeGusta() {
    for (let i = 1; i <= 10000; i = i * 10) {
        canciones.forEach(elemento => {
            if (elemento.meGusta >= i) {
                console.log("Felicidades, la cancion", elemento.cancion, "tiene más de", i, "meGusta!🥳")
            }
        })
    }
}
