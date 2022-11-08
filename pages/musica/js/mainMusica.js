const tarjetasMusica = document.querySelector("section#musica__tarjetas")//main

function armandoTarjetasMusica(elemento) {
    return `<article>
                <div class="tarjetaMusica">
                    <iframe class="tarjetaMusica__video" width="500" height="255" src="https://www.youtube.com/embed/${elemento.video}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <p class="tarjetaMusica__texto">${elemento.artista} - ${elemento.cancion}</p>
                    <button class="tarjetaMusica__boton">👍🏻 ${elemento.meGusta}</button>
                </div>
            </article>`
}

function colocandoTarjetasMusica() {
    tarjetasMusica.innerHTML = ""
    if (canciones.length > 0) {
        canciones.forEach(elemento => {
            tarjetasMusica.innerHTML += armandoTarjetasMusica(elemento)
        })
    }
}

colocandoTarjetasMusica()