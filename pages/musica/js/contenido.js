const canciones = []

const meGusta = () => parseInt(Math.random() * 10000)

class Contenido {
    constructor(artista, cancion, meGusta, video) {
        this.artista = artista
        this.cancion = cancion
        this.meGusta = meGusta
        this.video = video
    }
}