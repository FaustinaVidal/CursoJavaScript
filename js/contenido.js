const canciones = []

const meGusta = () => parseInt(Math.random() * 10000)

class Contenido {
    constructor(numero, artista, cancion, meGusta, video) {
        this.numero = numero
        this.artista = artista
        this.cancion = cancion
        this.meGusta = meGusta
        this.video = video
    }
}

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