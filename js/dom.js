const container = document.querySelector("div.row")

const listaDeReproduccion = []

//---
function armandoCardsCanciones(elemento) {
    return `<div class="col-12 col-md-4 mobile--centrar">
                <div data-aos="zoom-in-up">
                    <div class="card" style="width: 30rem;">
                        <div>
                            <iframe class="card-img-top" width="560" height="315"
                                src="https://www.youtube.com/embed/${elemento.video}" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="card-body">
                            <img src="./img/${elemento.artista}.jpg" class="card__img" alt="...">
                            <h5 class="card-title" id="cancionID">${elemento.cancion}</h5>
                            <p class="card-text">${elemento.artista}</p>
                            <p class="card-text">${elemento.meGusta}</p>
                            <div class="">
                                <button class="meGusta btn btn-dark" id="btnMeGusta${elemento.cancion}"
                                    title="Click para darle me gusta a ${elemento.cancion}.">
                                    👍🏻 Me gusta
                                </button>
                                <button class="suscribirse btn btn-dark" id="btnSuscribirse${elemento.genero}"
                                    title="Click para suscribirte al canal de ${elemento.artista}.">
                                    🔔 Suscribirse
                                </button>
                                <button class="aniadir btn btn-dark" id="${elemento.cancion}"
                                    title="Click para añadir ${elemento.cancion} a tu lista de reproducción.">
                                    ➕ Añadir a la lista
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
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
//Armando tu lista de reproduccion

const agregarListaDeReproduccion = (nombreCancion) => {
    let resultado = canciones.find(elemento => elemento.cancion === nombreCancion)
    if (resultado !== undefined) {
        listaDeReproduccion.push(resultado)
        guardarListaDeReproduccion()
    }
}

//---
//Guardando tu lista de reproduccion
const guardarListaDeReproduccion = () => {
    if (listaDeReproduccion.length > 0) {
        (localStorage.setItem("listaDeReproduccion", JSON.stringify(listaDeReproduccion)))
    }
}

const recuperarListaDeReproduccion = () => {
    if (localStorage.getItem("listaDeReproduccion")) {
        let listaDeReproduccionRecuperada = JSON.parse(localStorage.getItem("listaDeReproduccion"))
        listaDeReproduccionRecuperada.forEach(cancion => listaDeReproduccion.push(cancion))
    } else {
        alert("No tienes una lista de reproduccion guardada")
    }
} 
