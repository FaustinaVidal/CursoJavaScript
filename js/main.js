function bienvenida(nombreUsuario) {
    if (nombreUsuario !== "") {
        console.log("Bienvenide", nombreUsuario + "!")
    } else {
        console.warn("El nombre ingresado no es correcto")
    }
}

function registro() {
    let confirmacion = confirm("Quieres registrarte?")

    if (confirmacion) {
        let nombreUsuario = prompt("Dime tu nombre").trim()
        bienvenida(nombreUsuario)
    }
}

function conteoSuscriptores() {
    for (let i = 1; i < 10; i++) {

        if (i == 1) {
            console.log("Tienes", i, "suscriptor!")
        } else {
            console.log("Tienes", i, "suscriptores!")
        }
    }
}

function felicidades() {
    for (let i = 1; i <= 1000; i = i * 10) {
        console.log("Felicidades, tienes", i, "suscriptores!🥳")
    }
}


function preguntasFrecuentes() {
    
    let preguntas = "Preguntas frecuentes: \n" + 
    "1) Como me registro?\n" + 
    "2) Donde puedo ver mis suscriptores?\n" + 
    "3) Como doy de baja mi cuenta?"
    //alert(preguntas)

    let respuesta = prompt("Elige el nro de una de las preguntas para ver su respuesta. \n" + preguntas)
    switch (parseInt(respuesta)) {
        case 1:
            console.log("Como me registro? Para registrarte primero debes...")
            break;
        case 2:
            console.log("Donde puedo ver mis suscriptores? Para ver tus suscriptores debes...")
            break;
        case 3:
            console.log("Como doy de baja mi cuenta? Para dar de baja tu cuenta debes...")
            break;

        default:
            console.error("Debes ingresar el nro de una de las preguntas mencionadas anteriormente!")
            break;
    }
    let volver = confirm("Quieres ver la respuesta a otra pregunta?")
    if (volver) {
        preguntasFrecuentes()
    }
}

//--
function recorrerGeneros() {
    for (elemento of generos) {
        console.log(elemento)
    }
}

function agregarGenero() {
    let nuevoGenero = prompt("Que genero deseas agregar?").trim()
    if (generos.includes(nuevoGenero) && nuevoGenero.length > 0) {
        respuesta = confirm("El genero "+ nuevoGenero + " ya existe, quieres agregar otro?")
        if (respuesta) {
            agregarGenero()
        }
    } else {
        generos.push(nuevoGenero)
    }
}

function ordenarGeneros() {
    let generosOrdenados = generos.sort()
    console.log(generosOrdenados)
}

//--
function generadorAutomatico() {
    canciones.push(new Contenido("Bejo", "Agusto"))
    canciones.push(new Contenido("Bejo", "A mi manera"))
    canciones.push(new Contenido("Bejo", "Mentecato"))
    canciones.push(new Contenido("Bejo", "Como los gatos"))
    canciones.push(new Contenido("Rosalia", "Bizcochito"))
    canciones.push(new Contenido("Rosalia", "Despechá"))
    canciones.push(new Contenido("Lasser", "Cat life"))
    canciones.push(new Contenido("Lasser", "Sugar"))
    canciones.push(new Contenido("Lasser", "Paperplanes"))
    canciones.push(new Contenido("Craneo", "Escorpiones"))
    canciones.push(new Contenido("Craneo", "Mi locura"))
    canciones.push(new Contenido("Craneo", "Ahumado"))
    canciones.push(new Contenido("Craneo", "Burbujas"))
}
generadorAutomatico()

const listarCanciones = () => {
    console.table(canciones)
}

const agregarCancion = () => {
    let artista = prompt("Ingrese el nombre del artista de la canción que desea agregar:").trim()
    let cancion = prompt("Ingrese el nombre de la canción que desea agregar:").trim()

    if ((artista.length > 0) && (cancion.length > 0)) {
        canciones.push(new Contenido(artista, cancion))
        listarCanciones()
    } else {
        console.warn("Por favor, agrega una canción")
        agregarCancion()
    }

}

//--
function filtrarArtista() {
    let buscar = prompt("Que Artista quieres escuchar hoy?")
    let resultado = canciones.filter(elemento => elemento.artista.includes(buscar))
        if (resultado == []){
            console.warn("No se encontro ese Artista")
        } else {
            console.table(resultado)
        }
}

function filtrarCancion() {
    let buscar = prompt("Que canción quieres escuchar hoy?")
    let resultado = canciones.filter(elemento => elemento.cancion.includes(buscar))
        if (resultado == []){
            console.warn("No se encontro esa cancion")
        } else {
            console.table(resultado)
        }
}

//--
function ordenarPorArtista() {
    let artistasOrdenados = canciones.sort((a,b) => {
        if (a.artista > b.artista) {
            return 1
        }
        if (a.artista < b.artista) {
            return -1
        }
        return 0
    })
    console.table(artistasOrdenados)
}

function ordenarPorCancion() {
    let cancionesOrdenadas = canciones.sort((a,b) => {
        if (a.cancion > b.cancion) {
            return 1
        }
        if (a.cancion < b.cancion) {
            return -1
        }
        return 0
    })
    console.table(cancionesOrdenadas)
}

function quitarArtista() {
    let quitarArtista = prompt("Ingrese el pais que desea quitar de la lista:").trim()
    let posicion = canciones.artista.indexOf(quitarArtista)
        if (posicion > -1) {
            let artistaQuitado = canciones.artista.splice(posicion,1)
            console.log(artistaQuitado)
        }
}

