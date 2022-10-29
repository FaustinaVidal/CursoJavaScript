

const container = document.querySelector("div.container")

//--
function generadorAutomatico() {
    canciones.push(new Contenido(01, "Bejo", "Helarte", meGusta(), "OJp4-wFOu3k"))
    canciones.push(new Contenido(02, "Bejo", "A mi manera", meGusta(), "r9oNjUOS4pk"))
    canciones.push(new Contenido(03, "Bejo", "Mentecato", meGusta(), "8DZtdiL-9EU"))
    canciones.push(new Contenido(04, "Bejo", "Como los gatos", meGusta(), "zVWICv4cCtE"))
    canciones.push(new Contenido(05, "Sofia Gabana", "Twister", meGusta(), "N5ioeY8RogA"))
    canciones.push(new Contenido(06, "Sofia Gabana", "Vivimos deprisa", meGusta(), "-PkNgMNnr2I"))
    canciones.push(new Contenido(07, "Lasser", "Cat life", meGusta(), "lWVbKRFEcwg"))
    canciones.push(new Contenido(08, "Lasser", "Sugar", meGusta(), "v33Iqfss4FU"))
    canciones.push(new Contenido(09, "Lasser", "Paperplanes", meGusta(), "v33Iqfss4FU"))
    canciones.push(new Contenido(10, "Craneo", "Escorpiones", meGusta(), "OV-y-oA611g"))
    canciones.push(new Contenido(11, "Craneo", "Mi locura", meGusta(), "-Athx14oSss"))
    canciones.push(new Contenido(12, "Craneo", "Ahumado", meGusta(), "QpzSse_-7Zc"))
    canciones.push(new Contenido(13, "Craneo", "Burbujas", meGusta(), "ARsJC3ylg8w"))
    canciones.push(new Contenido(14, "Rels B", "Por siempre", meGusta(), "KaA6waEphOc"))
}
generadorAutomatico()

const listarCanciones = () => {
    console.table(canciones)
}

const agregarCancion = () => {
    let numero = "NaN"
    let artista = prompt("Ingrese el nombre del artista de la canción que desea agregar:").trim()
    let cancion = prompt("Ingrese el nombre de la canción que desea agregar:").trim()
    let meGusta = 0
    let video = prompt("Ingrese el codigo del video de la canción que desea agregar:").trim()

    if ((artista.length > 0) && (cancion.length > 0) && (video.length > 0)) {
        canciones.push(new Contenido(numero, artista, cancion, meGusta))
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
function armandoCardsCanciones(elemento) {
    return `<div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${elemento.video}" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div id="cancionID">${elemento.cancion}</div>
                <div>${elemento.artista}</div>
                <div>${elemento.meGusta}</div>
                <div>
                    <button class="meGusta" id="btnMeGusta${elemento.cancion}" title="Click para darle me gusta a ${elemento.cancion}.">
                        👍🏻 Me gusta
                    </button>
                    <button class="suscribirse" id="btnSuscribirse${elemento.numero}" title="Click para suscribirte al canal de ${elemento.artista}.">
                        🔔 Suscribirse
                    </button>
                    <button class="aniadir" id="${elemento.cancion}" title="Click para añadir ${elemento.cancion} a tu lista de reproducción.">
                        ➕ Añadir a la lista
                    </button>
                </div>
                <div></div>
            </div>`
}
//---
const activarBotonesLdr = () => {
    const botonesLdr = document.querySelectorAll("button.aniadir")
          botonesLdr.forEach(btn => {
            btn.addEventListener("click", () => {
                agregarListaDeReproduccion(btn.id)
            })
          })
}

function cardsCanciones() {
    container.innerHTML = ""
    if (canciones.length > 0) {
        canciones.forEach(elemento => {
            container.innerHTML += armandoCardsCanciones(elemento)
        })
    }
    activarBotonesLdr()
}

cardsCanciones()

//---
//Armando lista de reproduccion

const agregarListaDeReproduccion = (nombreCancion) => {
    let resultado = canciones.find(elemento => elemento.cancion === nombreCancion)
    if (resultado !== undefined) {
        listaDeReproduccion.push(resultado)
        console.clear()
        console.table(listaDeReproduccion)
    }
}

