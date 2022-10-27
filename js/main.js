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

function felicitacionPorSuscriptores() {
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
