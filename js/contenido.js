const canciones = []

const meGusta = () => parseInt(Math.random() * 10000)

class Contenido {
    constructor(genero, artista, cancion, meGusta, video) {
        this.genero = genero
        this.artista = artista
        this.cancion = cancion
        this.meGusta = meGusta
        this.video = video
    }
}

//--
function generadorAutomatico() {
    canciones.push(new Contenido("Rap", "Bejo", "Helarte", meGusta(), "OJp4-wFOu3k"))
    canciones.push(new Contenido("Rap", "Bejo", "A mi manera", meGusta(), "r9oNjUOS4pk"))
    canciones.push(new Contenido("Rap", "Bejo", "Mentecato", meGusta(), "8DZtdiL-9EU"))
    canciones.push(new Contenido("Rap", "Bejo", "Como los gatos", meGusta(), "zVWICv4cCtE"))
    canciones.push(new Contenido("Rap", "Sofia Gabana", "Twister", meGusta(), "N5ioeY8RogA"))
    canciones.push(new Contenido("Rap", "Sofia Gabana", "Vivimos deprisa", meGusta(), "-PkNgMNnr2I"))
    canciones.push(new Contenido("Rap", "Lasser", "Cat life", meGusta(), "lWVbKRFEcwg"))
    canciones.push(new Contenido("Rap", "Lasser", "Sugar", meGusta(), "v33Iqfss4FU"))
    canciones.push(new Contenido("Rap", "Lasser", "Paperplanes", meGusta(), "v33Iqfss4FU"))
    canciones.push(new Contenido("Rap", "Craneo", "Escorpiones", meGusta(), "OV-y-oA611g"))
    canciones.push(new Contenido("Rap", "Craneo", "Mi locura", meGusta(), "-Athx14oSss"))
    canciones.push(new Contenido("Rap", "Craneo", "Ahumado", meGusta(), "QpzSse_-7Zc"))
    canciones.push(new Contenido("Rap", "Craneo", "Burbujas", meGusta(), "ARsJC3ylg8w"))
    canciones.push(new Contenido("Rap", "Rels B", "Por siempre", meGusta(), "KaA6waEphOc"))
}
generadorAutomatico()