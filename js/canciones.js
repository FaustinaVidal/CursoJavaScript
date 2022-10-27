const meGusta = () => parseInt(Math.random() * 10000)

const tbody = document.querySelector("tbody")

//--
function generadorAutomatico() {
    canciones.push(new Contenido("Bejo", "Agusto", meGusta(), "-"))
    canciones.push(new Contenido("Bejo", "A mi manera", meGusta(), "-"))
    canciones.push(new Contenido("Bejo", "Mentecato", meGusta(), "-"))
    canciones.push(new Contenido("Bejo", "Como los gatos", meGusta(), "-"))
    canciones.push(new Contenido("Rosalia", "Bizcochito", meGusta(), "-"))
    canciones.push(new Contenido("Rosalia", "Despechá", meGusta(), "-"))
    canciones.push(new Contenido("Lasser", "Cat life", meGusta(), "-"))
    canciones.push(new Contenido("Lasser", "Sugar", meGusta(), "-"))
    canciones.push(new Contenido("Lasser", "Paperplanes", meGusta(), "-"))
    canciones.push(new Contenido("Craneo", "Escorpiones", meGusta(), "-"))
    canciones.push(new Contenido("Craneo", "Mi locura", meGusta(), "-"))
    canciones.push(new Contenido("Craneo", "Ahumado", meGusta(), "-"))
    canciones.push(new Contenido("Craneo", "Burbujas", meGusta(), "-"))
    canciones.push(new Contenido("Rels B", "Por siempre", meGusta(), "-"))
}
generadorAutomatico()

const listarCanciones = () => {
    console.table(canciones)
}

const agregarCancion = () => {
    let artista = prompt("Ingrese el nombre del artista de la canción que desea agregar:").trim()
    let cancion = prompt("Ingrese el nombre de la canción que desea agregar:").trim()
    let meGusta = 0
    let video = false

    if ((artista.length > 0) && (cancion.length > 0)) {
        canciones.push(new Contenido(artista, cancion, meGusta))
        tablaCanciones()
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
    tablaCanciones()
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
    tablaCanciones()
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
    tablaCanciones()
}

function felicitacionPormeGusta() {
    for (let i = 1; i <= 10000; i = i * 10) {
        canciones.forEach(elemento => {
            if (elemento.meGusta >= i) {
                console.log("Felicidades, la cancion", elemento.cancion, "tiene más de", i, "meGusta!🥳")
            }
        })
    }
}

//---
function armandoTablaCanciones(elemento) {
    return `<tr>
                <td>${elemento.artista}</td>
                <td id="cancionID">${elemento.cancion}</td>
                <td>${elemento.meGusta}</td>
                <td>${elemento.video}</td>
            </tr>`
}

function tablaCanciones() {
    tbody.innerHTML = ""
    if (canciones.length > 0) {
        canciones.forEach(elemento => {
            tbody.innerHTML += armandoTablaCanciones(elemento)
        })
    }
}

tablaCanciones()

//---
//Arma tu lista de reproduccion

//No anda esta wea
listaDeReproduccion = []

function armandoListaDeReproduccion() {
    const listaDeCanciones = document.querySelectorAll("td#cancionID")

    if (listaDeCanciones.length > 0) {
        listaDeCanciones.forEach(cancionID => {
            cancionID.addEventListener("dblclick",(e) => {
                listaDeReproduccion.push(e.target.innerText)
            })
        })
    }
}

armandoListaDeReproduccion()
