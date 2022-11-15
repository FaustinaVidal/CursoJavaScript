const tarjetasMusica = document.querySelector("section#musica__tarjetas")//main
const meGusta = () => parseInt(Math.random() * 100000)

const armandoTarjetasMusica = (elemento) => {
    return `<article>
                <div class="tarjetaMusica">
                    <iframe class="tarjetaMusica__video" width="500" height="255" src="https://www.youtube.com/embed/${elemento.video}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <p class="tarjetaMusica__texto">${elemento.artista} - ${elemento.cancion}</p>
                    <p class="" id="meGustas">${meGusta()} 👍🏻</p>
                </div>
            </article>`
}

const armandoTarjetasMusicaError = (elemento) => {
    return `<section class="tarjetas" id="musica__tarjetas">
                <div class="tarjeta__error">
                    <h2>No ha sido posible cargar las canciones 💣</h2>
                    <h3>Por favor, intenta mas tarde.</h3>
                </div>
            </section>`
}

/*
const colocandoTarjetasMusica = () => {
    tarjetasMusica.innerHTML = homero()
    setTimeout(() => {
        tarjetasMusica.innerHTML = ""
        canciones.length > 0 && canciones.forEach(elemento => tarjetasMusica.innerHTML += armandoTarjetasMusica(elemento))
    }, 2000);
}*/

//colocandoTarjetasMusica()